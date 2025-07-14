import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { v4 as generateUuid } from 'uuid';
import { recordLogEvent } from '../middleware/logger';
import { validateUrlFormat } from '../utils/validators';

const UrlShortenerForm = () => {
  const [urlInputs, setUrlInputs] = useState([
    { id: generateUuid(), url: '', validity: '', shortcode: '' },
  ]);
  const [shortenedResults, setShortenedResults] = useState([]);

  const handleInputChange = (id, field, value) => {
    setUrlInputs(
      urlInputs.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const addNewInput = () => {
    if (urlInputs.length < 5) {
      setUrlInputs([
        ...urlInputs,
        { id: generateUuid(), url: '', validity: '', shortcode: '' },
      ]);
    }
  };

  const handleFormSubmit = async () => {
    const processedResults = [];

    for (const input of urlInputs) {
      if (!validateUrlFormat(input.url)) {
        await recordLogEvent(
          'error',
          'UrlShortenerForm',
          `Invalid URL entered: ${input.url}`
        );
        continue;
      }

      const shortcode = input.shortcode || generateUuid().slice(0, 5);
      const creationDate = new Date();
      const expirationDate = new Date(
        creationDate.getTime() + (parseInt(input.validity) || 30) * 60000
      );

      const shortenedData = {
        ...input,
        shortcode,
        createdAt: creationDate,
        expiry: expirationDate,
        clicks: [],
      };

      processedResults.push(shortenedData);
    }

    setShortenedResults(processedResults);
    localStorage.setItem('shortUrls', JSON.stringify(processedResults));
    await recordLogEvent('info', 'UrlShortenerForm', 'URLs shortened successfully.');
  };

  return (
    <div>
      {urlInputs.map((input, index) => (
        <Card key={input.id} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h6">URL #{index + 1}</Typography>
            <TextField
              label="Original URL"
              fullWidth
              margin="normal"
              onChange={(e) => handleInputChange(input.id, 'url', e.target.value)}
            />
            <TextField
              label="Validity (mins)"
              fullWidth
              margin="normal"
              onChange={(e) =>
                handleInputChange(input.id, 'validity', e.target.value)
              }
            />
            <TextField
              label="Custom Shortcode (optional)"
              fullWidth
              margin="normal"
              onChange={(e) =>
                handleInputChange(input.id, 'shortcode', e.target.value)
              }
            />
          </CardContent>
        </Card>
      ))}

      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={handleFormSubmit}>
            Shorten URLs
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={addNewInput}>
            Add Another URL
          </Button>
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}>
        {shortenedResults.map((result) => (
          <Card key={result.shortcode} style={{ marginBottom: '8px' }}>
            <CardContent>
              <Typography variant="body1">
                Short URL:{' '}
                <a
                  href={`/${result.shortcode}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {window.location.origin}/{result.shortcode}
                </a>
              </Typography>
              <Typography variant="body2">
                Expires At: {new Date(result.expiry).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UrlShortenerForm;
