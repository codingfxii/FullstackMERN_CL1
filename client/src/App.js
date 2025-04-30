import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// Importing components for displaying posts and handling form submissions
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

// Importing action creators to fetch posts
import { getPosts } from './actions/posts';

// Importing custom styles and image assets
import useStyles from './styles';
import memoriesImage from './images/memories.png';

const App = () => {
  // Setting up the state to manage the current post ID for edit or delete actions
  const [currentId, setCurrentId] = useState(0);
  
  // Setting up the Redux dispatch function
  const dispatch = useDispatch();
  
  // Applying custom styles using the useStyles hook
  const classes = useStyles();

  // Using the useEffect hook to dispatch an action to get posts when the component mounts
  // and whenever the currentId or dispatch function changes
  useEffect(() => {
    // Dispatching the getPosts action to fetch the posts from the server
    dispatch(getPosts());
  }, [currentId, dispatch]); // Dependency array ensures this effect runs when currentId or dispatch changes

  return (
    <Container maxWidth="lg">
      {/* AppBar for the top header with title and an image */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* Title centered within the AppBar */}
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        {/* Image next to the title with some styling */}
        <img className={classes.image} src={memoriesImage} alt="Memories Icon" height="60" />
      </AppBar>

      {/* Grow component adds animation effect to the children when they enter the DOM */}
      <Grow in>
        <Container>
          {/* Grid system to layout the Posts and Form side by side */}
          <Grid container spacing={3} justify="space-between" alignItems="stretch">
            {/* Grid item for displaying the posts (larger on small screens, smaller on extra small screens) */}
            <Grid item xs={12} sm={7}>
              {/* Posts component to display a list of posts, passing the currentId state */}
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            {/* Grid item for the form to create or edit posts */}
            <Grid item xs={12} sm={4}>
              {/* Form component for post creation or editing, passing currentId and setCurrentId */}
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
