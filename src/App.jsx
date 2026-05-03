import "./App.css";
import k1 from "./images/kurti1.jpg";
import k2 from "./images/kurti2.jpg";
import k3 from "./images/kurti3.jpg";
import k4 from "./images/kurti4.jpg";
import k5 from "./images/kurti5.jpg";
import k6 from "./images/kurti6.jpg";
import k7 from "./images/kurti7.jpg";
import k8 from "./images/kurti8.jpg";
function App() {

 const products = [
  { name: "White Kurti", img: k1 },
  { name: "Printed Kurti", img: k2 },
  { name: "Orange Kurti", img: k3 },
  { name: "Blue Kurti", img: k4 },
  { name: "Brown Kurti", img: k5 },
  { name: "Black Kurti", img: k6 },
  { name: "Stylish Kurti", img: k7 },
  { name: "Light Kurti", img: k8 }
];
  return (
    <div className="container">

      {/* NAVBAR */}
      <div className="nav">
        <h2>Dreesify Lady Collection 💗</h2>

        <div>
          <a href="#">Home</a>
          <a href="#products">Shop</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">

        <div>
          <h1>
            Elegant Pink <br /> Dress Collection
          </h1>

          <p>
            Discover premium outfits for modern women 💖
          </p>

          <a
            href={`https://wa.me/918087084443?text=${encodeURIComponent(
              `Hello 👋\nI want to explore your collection`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Order on WhatsApp</button>
          </a>
        </div>

        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" />

      </div>

      {/* PRODUCTS */}
      <div className="products" id="products">

        <h2>Our Collection 👗</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div className="product" key={index}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <b>₹300</b>

              <a
                href={`https://wa.me/918073464431?text=${encodeURIComponent(
                  `Hello💕\nI want to order:\nProduct: ${item.name}\nPrice: ₹300`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Buy Now</button>
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="footer" id="contact">

        <h3>Dreesify Lady Collection  💗</h3>
        <p>Best fashion collection for modern women</p>
        <p>Contact: +91 8073464431</p>

        <div className="social">
          <p>Follow us</p>

          <div className="social-links">
            <a
              href="https://instagram.com/dreesify_11"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;