import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const StatisticsTable = () => {
  const [urlData, setUrlData] = useState([]);

  useEffect(() => {
    const savedUrls = JSON.parse(localStorage.getItem("shortUrls")) || [];
    setUrlData(savedUrls);
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Shortened URL</TableCell>
          <TableCell>Date Created</TableCell>
          <TableCell>Expiration Date</TableCell>
          <TableCell>Number of Clicks</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {urlData.map(entry => (
          <TableRow key={entry.shortcode}>
            <TableCell>
              <a href={`/${entry.shortcode}`} target="_blank" rel="noreferrer">
                {window.location.origin}/{entry.shortcode}
              </a>
            </TableCell>
            <TableCell>{new Date(entry.createdAt).toLocaleString()}</TableCell>
            <TableCell>{new Date(entry.expiry).toLocaleString()}</TableCell>
            <TableCell>{entry.clicks?.length || 0}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatisticsTable;
