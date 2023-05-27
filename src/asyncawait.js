import React, { useState, useEffect } from 'react';

const AsyncExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulating an asynchronous API request
      setLoading(true);

      const response = await fetch('https://api.example.com/data');
      const result = await response.json();

      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default AsyncExample;
