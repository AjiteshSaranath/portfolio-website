import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);

  // Fetch data from a URL (replace with your actual API URL)
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('YOUR_API_URL_HERE'); // Use your actual API URL
      const resData = await response.json(); // Getting JSON data from response

      setResponseData(
        initialData.map((field) => ({
          ...field,
          value: Object.keys(resData).includes(field.key)
            ? resData[field.key]
            : field.value,
        })),
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {/* <h3>Some stats about this site</h3> */}
      <Table data={data} />
    </div>
  );
};

export default Stats;
