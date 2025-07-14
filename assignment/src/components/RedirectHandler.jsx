import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UrlRedirectHandler = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    const matchedUrl = storedUrls.find((entry) => entry.shortcode === shortcode);

    if (!matchedUrl) {
      alert('Invalid or expired link.');
      return;
    }

    const currentTime = new Date();
    if (new Date(matchedUrl.expiry) < currentTime) {
      alert('This link has expired.');
      return;
    }

    matchedUrl.clicks = matchedUrl.clicks || [];
    matchedUrl.clicks.push({
      time: currentTime.toISOString(),
      referrer: document.referrer || 'Direct',
      location: 'India',
    });

    const updatedUrls = storedUrls.map((entry) =>
      entry.shortcode === shortcode ? matchedUrl : entry
    );
    localStorage.setItem('shortUrls', JSON.stringify(updatedUrls));

    window.location.href = matchedUrl.url;
  }, [shortcode]);

  return <div>Redirecting...</div>;
};

export default UrlRedirectHandler;
