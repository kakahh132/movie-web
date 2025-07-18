import React from 'react';
import './Home.css';
import Header from './Header';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p6 from '../assets/p6.jpeg';
import h1 from '../assets/h1.jpeg';
import shutter from '../assets/shutter.jpeg';
import harry from '../assets/harry.jpeg';
import areWeDoneYet from '../assets/are we done yet.jpeg';
import pandemic from '../assets/pandemic.jpeg';
import smile from '../assets/smile.jpeg';
import Footer from './Footer';

const Home = () => {
  const featuredMovies = [
    {
      id: 1,
      image: p4,
      title: "JAWS",
      tagline: "The terrifying motion picture"
    },
    {
      id: 2,
      image: h1,
      title: "SIGHT 3DWINS",
      tagline: "and BLUE EYES TAKE COVER"
    },
    {
      id: 3,
      image: shutter,
      title: "SHUTTER'S SAND",
      tagline: "LEONARD DOERTO"
    },
    {
      id: 4,
      image: p2,
      title: "MOVIE 2",
      tagline: "Tagline 2"
    },
    {
      id: 5,
      image: p3,
      title: "MOVIE 3",
      tagline: "Tagline 3"
    }
  ];

  const trendingNow = [
    { id: 1, image: p1, title: "The Manager" },
    { id: 2, image: p2, title: "Faceless" },
    { id: 3, image: p3, title: "Silence" },
    { id: 4, image: p6, title: "Avengers" },
    { id: 5, image: p4, title: "JAWS" }
  ];

  const cinemaxOriginals = [
    {
      id: 1,
      image: harry,
      title: "Harry Potter",
      subtitle: "Philosopher's Stone"
    },
    {
      id: 2,
      image: areWeDoneYet,
      title: "Are We Done Yet?",
      subtitle: "New York Water Passage"
    },
    {
      id: 3,
      image: pandemic,
      title: "Pandemic",
      subtitle: ""
    },
    {
      id: 4,
      image: smile,
      title: "Smile",
      subtitle: "Once You See It, It's Too Late"
    }
  ];

  return (
    <div className="page-container">
      <Header />
      
      <main className="main-content">
        {/* Hero Carousel */}
        <div className="cover-carousel">
          {featuredMovies.map(movie => (
            <div key={movie.id} className="cover-slide">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="cover-image"
              />
              <div className="cover-details">
                <h2 className="cover-movie-title">{movie.title}</h2>
                <p className="cover-movie-tagline">{movie.tagline}</p>
                <div className="cover-buttons">
                  <button className="watch-now-btn">Watch Now</button>
                  <button className="more-info-btn">More Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Now Section */}
        <section className="trending-section">
          <h2 className="section-title">TRENDING NOW</h2>
          <div className="trending-grid">
            {trendingNow.map(movie => (
              <div key={movie.id} className="trending-item">
                <img src={movie.image} alt={movie.title} className="trending-image" />
                <div className="trending-overlay">
                  <h3>{movie.title}</h3>
                  <button className="trending-play-btn">▶</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cinemax Originals Section */}
        <section className="originals-section">
          <h2 className="section-title">CINEMAX ORIGINALS</h2>
          <div className="originals-grid">
            {cinemaxOriginals.map(movie => (
              <div key={movie.id} className="original-item">
                <img src={movie.image} alt={movie.title} className="original-image" />
                <div className="original-overlay">
                  <h3>{movie.title}</h3>
                  {movie.subtitle && <p>{movie.subtitle}</p>}
                </div>
                <div className="original-badge">ORIGINAL</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;