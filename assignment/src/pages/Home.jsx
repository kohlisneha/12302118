import React from 'react';
import UrlShortenerForm from '../components/UrlForm';
import { Container, Typography } from '@mui/material';


const HomePage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      URL Shortener
    </Typography>
    <UrlShortenerForm />
  </Container>
);

export default HomePage;
