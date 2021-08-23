import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Search from '../components/search';
import ColorCard from '../components/color-card';

export default function Home() {

  const [colorName, setColorName] = useState('')
  const getInitialData = async (e) => {
    // const res = await fetch(
    //   `https://api.color.pizza/v1/${e}`
    // );
    // const data = await res.json();
    // console.log(data)
    // setColorName(data.colors.name);
  }

  // useEffect(() => {
  //   getInitialData();
  // },[setColorName]);

  return (
    <Layout>
      <div className="container">
        <div className="find-color-wrapper">
          <Search handleSearch={(e) => console.log(e)} />
          <ColorCard name={colorName} />
        </div>
      </div>
    </Layout>
  )
}
