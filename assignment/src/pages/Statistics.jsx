import React from 'react';
import StatisticsTable from '../components/StatsTable';
import { Container, Typography } from '@mui/material';


const StatisticsPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      URL Statistics
    </Typography>
    <StatisticsTable />
  </Container>
);

export default StatisticsPage;
