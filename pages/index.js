import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Search from "../components/search";
import ColorCard from "../components/color-card";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();
  const path = router.asPath;
  const lastSix = path.substr(path.length - 6);

  const [colorName, setColorName] = useState("");
  const [color, setColor] = useState("");
  
  const getInitialData = async (e) => {
    if (e) {
      const res = await fetch(`https://api.color.pizza/v1/${e}`);
      const data = await res.json();
      setColorName(data.colors[0].name);
      setColor(data.colors[0].hex);
    }
  };

  useEffect(() => {
    console.log(lastSix.indexOf('/'))
    if(lastSix.indexOf('/') == -1) {
      getInitialData(lastSix);
    } else {
      getInitialData('000000');
    }
    
  console.log(lastSix)
  }, [setColorName]);

  return (
    <Layout>
      <div className="container">
        <div className="find-color-wrapper">
          <Search handleSearch={(e) => getInitialData(e)} />
          <ColorCard name={colorName} hex={color} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
