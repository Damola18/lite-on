"use client"
import { useState, useEffect } from 'react'

const useDataFetching = (fetchData: () => Promise<void>) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
      // await new Promise((resolve) => setTimeout(resolve, 10000));
      setIsLoading(false);
      
    };

    fetchDataAsync();
  }, [fetchData]);

  return isLoading;
}

export default useDataFetching;