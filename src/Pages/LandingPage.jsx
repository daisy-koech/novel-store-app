import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [storeInfo, setStoreInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/storeInfo")
      .then(res => res.json())
      .then(data => setStoreInfo(data[0]))
      .catch(err => console.error("Failed to fetch store info:", err));
  }, []);

  if (!storeInfo) {
    return <p>Loading store information...</p>;
  }

  return (
    <div className="landing-container">
      <h1 className="landing-title">{storeInfo.name}</h1>
      <p className="landing-description"><em>{storeInfo.description}</em></p>

      <div className="landing-contact-info">
        {storeInfo.phoneNumber && <p><b>Phone:</b> {storeInfo.phoneNumber}</p>}
        {storeInfo.email && <p><b>Email:</b> {storeInfo.email}</p>}
        {storeInfo.address && <p><b>Address:</b> {storeInfo.address}</p>}
        {storeInfo.hours && <p><b>Hours:</b> {storeInfo.hours}</p>}
      </div>

      <div className="landing-social">
        {storeInfo.facebook && (
          <Link to={storeInfo.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
        )}
        {storeInfo.instagram && (
          <Link to={storeInfo.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        )}
      </div>

      <div className="landing-buttons">
        <Link to="/novels">
          <button>Browse Novels</button>
        </Link>
        <Link to="/add-novel">
          <button>Add a Novel</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;