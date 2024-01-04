import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ItemList from '../components/ItemList'; 
import TransitionPage from './TransitionPage';
import './Home.css';

const Home: React.FC = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [showMainPanel, setShowMainPanel] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/items.json');
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('carouselItems:', data);
    
        setCarouselItems(data);
        setShowMainPanel(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setShowMainPanel(true);
      }
    };
    

    const timeout = setTimeout(fetchData, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <header className="App-header text-center">
        {showMainPanel ? (
          <div>
            <h1 className="mt-3 text-white text-center">OS REGISTRO</h1>
            <div className="row mt-5">
              <div className="col">
                <h2 className="to-do">To Do</h2>
                <div className="d-flex justify-content-between mt-3">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="card to-do-item text-center" style={{ width: '100px', height: '100px', backgroundColor: '#FFCB37', marginBottom: '30px' }}>
                      OS 6
                    </div>
                    <div className="card to-do-item text-center" style={{ width: '100px', height: '100px', backgroundColor: '#FFCB37', marginBottom: '30px' }}>
                      OS 7
                    </div>
                    <div className="card to-do-item text-center" style={{ width: '100px', height: '100px', backgroundColor: '#FFCB37', marginBottom: '30px' }}>
                      OS 8
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <h2 className="in-process">In Process</h2>
              </div>
              <div className="col">
                <h2 className="done">Done</h2>
              </div>
            </div>
          </div>
        ) : (
          <TransitionPage />
        )}
      </header>
    </div>
  );
};

export default Home;
