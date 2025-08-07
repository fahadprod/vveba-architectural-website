'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

// Default images to use if API fails
const DEFAULT_IMAGES = [
  { url: '/images/card1.jpg', caption: 'Your Dream House is here' },
  { url: '/images/card2.jpg', caption: 'Your Dream House is here' },
  { url: '/images/card3.jpg', caption: 'Your Dream House is here' },
  { url: '/images/card4.jpg', caption: 'Your Dream House is here' },
  { url: '/images/card5.jpg', caption: 'Your Dream House is here' }
];

async function fetchPropertyData(zpid) {
  const options = {
    method: 'GET',
    url: 'https://zillow56.p.rapidapi.com/photos',
    params: { zpid },
    headers: {
      'x-rapidapi-key': '02568f3f37mshad37887cb2a68d7p139623jsn934736b0fcb7',
      'x-rapidapi-host': 'zillow56.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching property data:', error);
    throw error;
  }
}

export default function Projects() {
  const [propertyPhotos, setPropertyPhotos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchPropertyData('2110846380');
        
        // Filter photos with captions and process them
        const processedPhotos = data.photos
          .filter(photo => photo.caption && photo.caption.trim() !== '')
          .map(photo => ({
            url: photo.mixedSources?.jpeg?.[0]?.url || '',
            caption: photo.caption
          }));
        
        setPropertyPhotos(processedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError(error);
        // Use default images if API fails
        setPropertyPhotos(DEFAULT_IMAGES);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  // Determine which photos to display
  const photosToDisplay = error || propertyPhotos.length === 0 
    ? DEFAULT_IMAGES.slice(0, visibleCount)
    : propertyPhotos.slice(0, visibleCount);

  return (
    <section className="projects">
      <h1 className="projects-heading">LATEST PROJECTS</h1>
      
      {loading ? (
        <div className="loading">Loading properties...</div>
      ) : (
        <>
          <div className="cards">
            {photosToDisplay.map((photo, index) => (
              <div className="card" key={index}>
                <img 
                  src={photo.url || DEFAULT_IMAGES[index % DEFAULT_IMAGES.length].url} 
                  alt={`Property ${index + 1}`} 
                  onError={(e) => {
                    e.target.src = DEFAULT_IMAGES[index % DEFAULT_IMAGES.length].url;
                  }}
                />
                <div className="card-content">
                  <h1>{photo.caption || 'Your Dream House is here'}</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vero?</p>
                </div>
              </div>
            ))}
          </div>

          {propertyPhotos.length > visibleCount && (
            <div className="load-more-container">
              <button onClick={loadMore} className="load-more-btn">
                Load More
              </button>
            </div>
          )}
        </>
      )}

      <div className="designs section-bottom">
        <h1>AWESOME</h1>
        <h3>DESIGNS</h3>
      </div>
    </section>
  );
}