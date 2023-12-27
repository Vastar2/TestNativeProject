import React, {useEffect, useState} from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import {API_KEY} from '@env';

const App = (): React.JSX.Element => {
  const [queryName, setQueryName] = useState('');
  const [currentData, setCurrentData] = useState<any>(null);

  const getData = async () => {
    const data = await fetch(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=20&page=1`,
    );
    const result = await data.json();

    setQueryName('New photos');
    setCurrentData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const getDataByName = async (name: string) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${name}&per_page=20&page=1`,
    );
    const result = await data.json();

    setQueryName(name);
    setCurrentData(result.results);
  };

  return (
    <>
      <Header
        onSearch={input => {
          if (input.length === 0) {
            getData();
          } else {
            getDataByName(input);
          }
        }}
      />
      {currentData && (
        <Gallery queryName={queryName} currentData={currentData} />
      )}
      <Footer />
    </>
  );
};

export default App;
