import { useState } from "react";
import "./Watchlist.css";
import hhh from "../assets/hhh.jpeg";
import Footer from "./Footer";
import h1 from "../assets/h1.jpeg";
import shutter  from "../assets/shutter.jpeg";
import trek from "../assets/trek.jpeg";

interface WatchlistItem {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  description: string;
}

const Watchlist = () => {

  const [watchlist] = useState<WatchlistItem[]>([
    {
      id: "1",
      title: "THOR",
      subtitle: "THEBARKWORLD",
      coverImage: hhh,
      description: "The mighty Thor battles to protect Asgard and Earth from powerful threats."
    },
    {
      id: "2",
      title: "SHUTTER",
      subtitle: "ISLAND",
      coverImage: shutter,
      description: "The Island shutters."
    },
    {
      id: "3",
      title: "STAR TREK",
      subtitle: "TREK",
      coverImage: trek,
      description: "wonderful movie."
    },
    {
      id: "4",
      title: "TAKE",
      subtitle: "COVER",
      coverImage: h1,
      description: "Taking cover."
    }
  ]);

  const [selectedItem, setSelectedItem] = useState<WatchlistItem | null>(null);

  return (
    <div className="watchlist-container">
      <h1 className="watchlist-header">My Watchlist</h1>
      
      {selectedItem ? (
        <div className="item-detail">
          <div className="detail-content">
            <img 
              src={selectedItem.coverImage} 
              alt={selectedItem.title} 
              className="detail-image"
            />
            <div className="detail-text">
              <h2>{selectedItem.title}</h2>
              <h3>{selectedItem.subtitle}</h3>
              <p>{selectedItem.description}</p>
              <button 
                onClick={() => setSelectedItem(null)}
                className="back-button"
              >
                Back to Watchlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="watchlist-grid">
          {watchlist.map((item) => (
            <div 
              key={item.id} 
              className="watchlist-item"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.coverImage} 
                alt={item.title} 
                className="item-cover"
              />
              <div className="item-overlay">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Watchlist;