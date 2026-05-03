export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 60px",
      background: "#f5f5f5"
    }}>
      <h2>B&W</h2>

      <div>
        <a style={{ margin: "15px" }}>Home</a>
        <a style={{ margin: "15px" }}>Shop</a>
        <a style={{ margin: "15px" }}>About</a>
      </div>
    </div>
  );
}