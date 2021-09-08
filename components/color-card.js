export default function ColorCard({ name, hex }) {

  const copyName = (e) => {
    navigator.clipboard.writeText(name)
    e.target.innerText = "Copied"

    setInterval(() => {
      e.target.innerText = "Copy Color Name"
    }, 2000);
  }

  return (
    <div className="color-card-wrapper">
      <div className="color-card">
        <div className="box" style={{ backgroundColor: `${hex}`  }}></div>
        <div className="color-info">
          <h2 className="color-name">{name}</h2>
          <span className="copy-name" onClick={copyName}>Copy Color Name</span>
        </div>
      </div>
    </div>
  );
}
