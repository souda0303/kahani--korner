import { createSlice } from '@reduxjs/toolkit';
import sampleBlogs from '../data/sampleData';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: sampleBlogs,
  reducers: {
    addBlog: (state, action) => {
      state.push(action.payload);
    },
    updateBlog: (state, action) => {
      const { id, title, image, content, category } = action.payload;
      const existingBlog = state.find((blog) => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.image = image;
        existingBlog.content = content;
        existingBlog.category = category;
      }
    },
    deleteBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload.id);
    },
    addComment: (state, action) => {
      const { blogId, comment } = action.payload;
      const blog = state.find((blog) => blog.id === blogId);
      if (blog) {
        blog.comments.push(comment);
      }
    },
    addReply: (state, action) => {
      const { blogId, commentId, reply } = action.payload;
      const blog = state.find((blog) => blog.id === blogId);
      if (blog) {
        const comment = blog.comments.find((c) => c.id === commentId);
        if (comment) {
          comment.replies.push(reply);
        }
      }
    },
    likeComment: (state, action) => {
      const { blogId, commentId } = action.payload;
      const blog = state.find((blog) => blog.id === blogId);
      if (blog) {
        const comment = blog.comments.find((c) => c.id === commentId);
        if (comment) {
          comment.likes = (comment.likes || 0) + 1;
        }
      }
    },
  },
});

export const { addBlog, updateBlog, deleteBlog, addComment, addReply, likeComment } = blogSlice.actions;
export default blogSlice.reducer;
