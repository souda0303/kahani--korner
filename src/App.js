import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline, Container, Typography, Grid } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import BlogEditor from './components/BlogEditor';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ThemeSwitcher from './components/ThemeSwitcher';
import { getTheme } from './theme';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const AppWrapper = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const theme = getTheme(isDarkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Grid container justifyContent="space-between" alignItems="center" style={{ margin: '20px 0' }}>
            <Typography variant="h4">My Blog</Typography>
            <ThemeSwitcher />
          </Grid>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/category/:category" element={<BlogList />} />
            <Route path="/edit/:id" element={<BlogEditor />} />
            <Route path="/create" element={<BlogEditor />} />
            <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
        </motion.div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const App = () => (
  <Provider store={store}>
    <Router>
      <AppWrapper />
    </Router>
  </Provider>
);

export default App;
