import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlog, addBlog } from '../redux/blogSlice'; // Import the addBlog action
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useTheme } from '@mui/material/styles';

const BlogEditor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  // Get all blogs from Redux state
  const blogs = useSelector(state => state.blogs);

  // Find the existing blog based on id
  const existingBlog = blogs.find(blog => blog.id === id);

  // Initialize state variables
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  // Update state with existing blog data when component mounts
  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title || '');
      setImage(existingBlog.image || '');
      setContent(existingBlog.content || '');
      setCategory(existingBlog.category || '');
    }
  }, [existingBlog]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle form submission
  const handleSubmit = () => {
    const blogData = {
      title,
      image,
      content,
      category,
    };

    if (existingBlog) {
      // If editing existing blog
      dispatch(updateBlog({ id, ...blogData }));
    } else {
      // If creating new blog
      const newBlog = {
        id: uuidv4(),
        ...blogData,
      };
      dispatch(addBlog(newBlog));
    }

    navigate('/'); // Navigate back to blog list or home page
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: '600px' }}
      >
        <Card
          style={{
            marginTop: '20px',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(135deg, #424242 30%, #303030 90%)' 
              : 'linear-gradient(135deg, #f3e5f5 30%, #e1bee7 90%)',
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: theme.palette.mode === 'dark' ? '#fff' : '#4a148c',
                marginBottom: '20px',
              }}
            >
              {id ? 'Edit Blog Post' : 'Create Blog Post'}
            </Typography>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                }
              }}
              InputProps={{
                style: {
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff'
                }
              }}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              marginTop="20px"
            >
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload">
                <IconButton component="span">
                  <AddPhotoAlternateIcon fontSize="large" />
                </IconButton>
              </label>
              {image && (
                <Box mt={2}>
                  <img
                    src={image}
                    alt="Blog"
                    style={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </Box>
              )}
            </Box>
            <ReactQuill
              value={content}
              onChange={setContent}
              style={{
                marginTop: '20px',
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? '#fff' : '#4a148c',
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff',
                '--ql-toolbar-background': theme.palette.mode === 'dark' ? '#fff' : '#f3f3f3',
                '--ql-container-background': theme.palette.mode === 'dark' ? '#fff' : '#fff',
                '--ql-editor-background': theme.palette.mode === 'dark' ? '#fff' : '#fff',
                '--ql-editor-color': theme.palette.mode === 'dark' ? '#fff' : '#000',
                '--ql-toolbar-color': theme.palette.mode === 'dark' ? '#fff' : '#000',
              }}
            />
            <FormControl fullWidth variant="outlined" style={{ marginTop: '20px' }}>
              <InputLabel id="category-label" style={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                Category
              </InputLabel>
              <Select
                labelId="category-label"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
                style={{ 
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
                <MenuItem value="education">Education</MenuItem>
                <MenuItem value="travel">Travel</MenuItem>
                <MenuItem value="technology">Technology</MenuItem>
                <MenuItem value="other">Other</MenuItem> {/* Add an 'Other' option */}
              </Select>
            </FormControl>
            <Grid container justifyContent="flex-end" style={{ marginTop: '20px' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(45deg, #4a148c 30%, #8e24aa 90%)',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  {id ? 'Update' : 'Submit'}
                </Button>
              </motion.div>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default BlogEditor;
