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
  }, []);

  function rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div className="palette-wrapper">
      <div className="palette-box-wrapper">
        {hexColor.map((item) => (
          <Link href={`/#${rgbToHex(item.r, item.g, item.b)}`} key={Math.random()}>
            <a
              className="color-box"
              style={{
                background: `rgb(${item.r},${item.g},${item.b})`,
              }}
            ></a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Palette;
