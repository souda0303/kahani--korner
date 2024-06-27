import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, CardMedia, Grid, IconButton, Button, DialogActions, DialogContent, Dialog, DialogTitle } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBlog } from '../redux/blogSlice';
import { useTheme } from '@mui/material/styles';

const truncateContent = (content, length) => {
  const strippedContent = content.replace(/(<([^>]+)>)/gi, ''); // Strip HTML tags
  return strippedContent.length > length ? `${strippedContent.substring(0, length)}...` : strippedContent;
};

const BlogList = () => {
  const { category } = useParams();
  const blogs = useSelector(state => {
    if (category) {
      return state.blogs.filter(blog => blog.category === category);
    } else {
      return state.blogs;
    }
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setBlogToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteBlog({ id: blogToDelete }));
    setDeleteDialogOpen(false);
    setBlogToDelete(null);
  };

  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setBlogToDelete(null);
  };

  const handleShowMore = (id) => {
    navigate(`/post/${id}`);
  };

  // Function to group blogs by category
  const groupBlogsByCategory = () => {
    const groupedBlogs = {};
    blogs.forEach(blog => {
      if (groupedBlogs[blog.category]) {
        groupedBlogs[blog.category].push(blog);
      } else {
        groupedBlogs[blog.category] = [blog];
      }
    });
    return groupedBlogs;
  };

  const groupedBlogs = groupBlogsByCategory();

  return (
    <Box sx={{ padding: '20px' }}>
      {Object.keys(groupedBlogs).map(category => (
        <Box key={category} marginBottom={4}>
          <Typography variant="h4" sx={{ marginBottom: '16px', borderBottom: `2px solid ${theme.palette.divider}` }}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>

          {/* Featured Blog */}
          {groupedBlogs[category][0] && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card sx={{
                marginTop: '20px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '450px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.mode === 'dark' ? '#1f1f1f' : '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}>
                <CardMedia
                  component="img"
                  image={groupedBlogs[category][0].image}
                  alt={groupedBlogs[category][0].title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: "blur(3px)",
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 3,
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: theme.palette.mode === 'dark' ? '#ddd' : '#fff' }}>
                    {groupedBlogs[category][0].title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '10px', color: theme.palette.mode === 'dark' ? '#ccc' : '#eee' }}>
                    {truncateContent(groupedBlogs[category][0].content, 120)}
                  </Typography>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Button
                      size="small"
                      onClick={() => handleShowMore(groupedBlogs[category][0].id)}
                      sx={{
                        textTransform: 'none',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
                        backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : '#1976d2',
                        '&:hover': {
                          color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
                          backgroundColor: theme.palette.mode === 'dark' ? '#64b5f6' : '#004ba0',
                          borderRadius: '8px',
                        },
                      }}
                    >
                      Continue Reading...
                    </Button>
                    <Box>
                      <IconButton onClick={() => handleEdit(groupedBlogs[category][0].id)} style={{ marginRight: '10px' }} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(groupedBlogs[category][0].id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          )}

          {/* Grid of Blogs */}
          <Grid container spacing={3} marginTop={3}>
            {groupedBlogs[category].slice(1).map(blog => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '450px',
                    maxHeight: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.mode === 'dark' ? '#1f1f1f' : '#fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}>
                    <CardMedia
                      component="img"
                      image={blog.image}
                      alt={blog.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: "blur(3px)",
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: 3,
                        zIndex: 2,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: theme.palette.mode === 'dark' ? '#ddd' : '#fff' }}>
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: '10px', color: theme.palette.mode === 'dark' ? '#ccc' : '#eee' }}>
                        {truncateContent(blog.content, 120)}
                      </Typography>
                      <Grid container justifyContent="space-between" alignItems="center">
                        <Button
                          size="small"
                          onClick={() => handleShowMore(blog.id)}
                          sx={{
                            textTransform: 'none',
                            color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
                            backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : '#1976d2',
                            '&:hover': {
                              color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
                              backgroundColor: theme.palette.mode === 'dark' ? '#64b5f6' : '#004ba0',
                              borderRadius: '8px',
                            },
                          }}
                        >
                          Continue Reading...
                        </Button>
                        <Box>
                          <IconButton onClick={() => handleEdit(blog.id)} style={{ marginRight: '10px' }} color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(blog.id)} color="error">
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to delete this blog post?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BlogList;
