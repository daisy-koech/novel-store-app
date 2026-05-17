import {useEffect, useState} from "react";
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
      <p className="landing-description">{storeInfo.description}</p>
      <p className="landing-contact">Contact: {storeInfo.phoneNumber}</p>
      <div className="landing-buttons">
        <button>
        <Link to="/novels">Browse Novels</Link>
        </button>
        <button>
        <Link to="/add-novel">Add a Novel</Link>
        </button>
      </div>
    </div>
  );
}
export default LandingPage;
