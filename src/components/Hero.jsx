export default function Hero() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "80px",
      background: "#f5f5f5"
    }}>

      {/* LEFT SIDE */}
      <div style={{ maxWidth: "500px" }}>
        <h1 style={{ fontSize: "50px", fontWeight: "500" }}>
          Black & White <br /> Dress Collection
        </h1>

        <p style={{ marginTop: "15px", color: "gray" }}>
          Premium fashion for modern women. Elegant and minimal styles.
        </p>

        <button style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>
          Go To Store →
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div>
        <img 
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          style={{
            width: "350px",
            borderRadius: "20px"
          }}
        />
      </div>

    </div>
  );
}