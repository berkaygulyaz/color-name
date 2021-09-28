import Link from 'next/link';

const ColorCard = ({ name, hex }) => {

  const copyName = (e) => {
    navigator.clipboard.writeText(name)
    e.target.innerText = "Copied"

    setInterval(() => {
      e.target.innerText = name
    }, 2000);
  }

  return (
    <div className="color-card-wrapper">
      <div className="color-card">
        <div className="box" style={{ backgroundColor: `${hex}`  }}></div>
        <div className="color-info">
          <h2 className="color-name" onClick={copyName}>{name}</h2>
          <Link href={{ pathname: '/palette', query: { hex: `${hex}` } }}>
            <a className="color-palette-btn">Show Color Palette</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ColorCard;