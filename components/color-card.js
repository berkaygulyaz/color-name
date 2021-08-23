export default function ColorCard({ name, hex }) {
  return (
    <div className="color-card-wrapper">
      <div className="color-card">
        <div className="box" style={{ backgroundColor: `${hex}`  }}></div>
        <div className="color-info">
          <h2 className="color-name">{name}</h2>
        </div>
      </div>
    </div>
  );
}
