import React, {useState} from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
// import {API_KEY} from '@env';

const App = (): React.JSX.Element => {
  const [temp, setTemp] = useState('');

  return (
    <>
      <Header onSearch={input => setTemp(input)} />
      <Gallery temp={temp} />
      <Footer />
    </>
  );
};

export default App;
