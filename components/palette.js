import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const Palette = () => {
  const router = useRouter();
  const path = router.asPath;
  const lastSix = `#${path.substr(path.length - 6)}`;

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(lastSix);

  const [hexColor, setHexColor] = useState([]);

  var arr = [];
  useEffect(() => {
    for (let index = 0; index <= 100; index += 10) {
      const r = parseInt(result[1], 16) + index;
      const g = parseInt(result[2], 16) + index;
      const b = parseInt(result[3], 16) + index;
      arr.push({ r, g, b });
      setHexColor(arr);
    }
    // console.log(hexColor);
  }, []);

  return (
    <div className="palette-wrapper">
      <div className="palette-box-wrapper">
        {hexColor.map((berkay) => 
          // console.log(berkay)
          <div className="palette-box" key={Math.random()}>
            <div
              className="color-box"
              style={{
                background: `rgb(${berkay.r},${berkay.g},${berkay.b})`,
              }}
            ></div>
          </div>
        )}
        {/* {hexColor.forEach((element) => (
          // console.log(element),
          
        ))} */}
      </div>
    </div>
  );
};

export default Palette;
