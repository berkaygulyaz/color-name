import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Search from '../components/search';
import ColorCard from '../components/color-card';

const Home = () => {

  const [colorName, setColorName] = useState('');
  const [color, setColor] = useState('');
  const getInitialData = async (e) => {
    if(e) {
      const res = await fetch(
        `http://www.thecolorapi.com/id?scheme&hex=${e}`
      );
      const data = await res.json();
      setColorName(data.name.value);
      setColor(data.hex.value);
    }
  }

  useEffect(() => {
    getInitialData('000000');
  },[setColorName]);

  return (
    <Layout>
      <div className="container">
        <div className="find-color-wrapper">
          <Search handleSearch={(e) => getInitialData(e)} />
          <ColorCard name={colorName} hex={color} />
        </div>
      </div>
    </Layout>
  )
}

export default Home;