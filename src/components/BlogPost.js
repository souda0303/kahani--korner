import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Card, CardContent, TextField, Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { useParams } from 'react-router-dom';
import { addComment, addReply, likeComment } from '../redux/blogSlice';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const BlogPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector(state => state.blogs.find(blog => blog.id === id));

  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const handleCommentSubmit = () => {
    const newComment = {
      id: uuidv4(),
      text: commentText,
      replies: [],
      likes: 0
    };
    dispatch(addComment({ blogId: id, comment: newComment }));
    setCommentText('');
  };

  const handleReplySubmit = (commentId) => {
    const newReply = {
      id: uuidv4(),
      text: replyText,
      likes: 0
    };
    dispatch(addReply({ blogId: id, commentId, reply: newReply }));
    setReplyText('');
    setReplyingTo(null);
  };

  const handleLikeComment = (commentId) => {
    dispatch(likeComment({ blogId: id, commentId }));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card
        style={{
          marginTop: '20px',
          borderRadius: '15px',
          boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
          overflow: 'hidden',
        }}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#4a148c'
            }}
          >
            {blog.title}
          </Typography>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              marginBottom: '20px'
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} style={{ marginBottom: '20px' }} />
          <Box marginTop={2}>
            <Typography variant="h5" gutterBottom>Comments</Typography>
            <TextField
              label="Add a comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleCommentSubmit}
              style={{
                marginTop: '10px',
                background: 'linear-gradient(45deg, #4a148c 30%, #8e24aa 90%)',
                color: '#fff'
              }}
            >
              Submit Comment
            </Button>
            <List>
              {blog.comments.map(comment => (
                <ListItem
                  key={comment.id}
                  alignItems="flex-start"
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: '10px',
                    marginBottom: '10px',
                    padding: '10px'
                  }}
                >
                  <ListItemText
                    primary={comment.text}
                    secondary={
                      <React.Fragment>
                        {comment.replies.map(reply => (
                          <Typography
                            key={reply.id}
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            style={{ display: 'block', marginLeft: '20px', marginTop: '10px' }}
                          >
                            {reply.text}
                          </Typography>
                        ))}
                      </React.Fragment>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="like" onClick={() => handleLikeComment(comment.id)}>
                      <ThumbUpIcon /> {comment.likes}
                    </IconButton>
                    <Button onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)} style={{ marginLeft: '10px' }}>
                      Reply
                    </Button>
                    {replyingTo === comment.id && (
                      <Box marginTop={2}>
                        <TextField
                          label="Add a reply"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          fullWidth
                          margin="normal"
                          multiline
                          rows={2}
                          variant="outlined"
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleReplySubmit(comment.id)}
                          style={{
                            marginTop: '10px',
                            background: 'linear-gradient(45deg, #4a148c 30%, #8e24aa 90%)',
                            color: '#fff'
                          }}
                        >
                          Submit Reply
                        </Button>
                      </Box>
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogPost;
