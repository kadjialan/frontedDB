/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import './Home.css';

function Home() {
  const [see, setSee] = useState(false);

  return (
    <div className="home2">
      <div className="icons-holder">
        <i className="fa-sharp fa-solid fa-bars" onClick={() => setSee(!see)} />
        <i className="fa-solid fa-ellipsis-vertical" />
      </div>

      {see && (
        <div className="sidebar">
          <i className="fa-solid fa-xmark" onClick={() => setSee(!see)} />

          <div className="content">
            <h2>Categories</h2>
            <ul>
              <li>
                <input type="checkbox" />
                Beer
              </li>
              <li>
                <input type="checkbox" />
                Champagne
              </li>
              <li>
                <input type="checkbox" />
                Whisky
              </li>
              <li>
                <input type="checkbox" />
                Juice
              </li>
              <li>
                <input type="checkbox" />
                Water
              </li>
              <li>
                <input type="checkbox" />
                Tea
              </li>
            </ul>

            <h2>Glasses</h2>
            <ul>
              <li>
                <input type="checkbox" />
                Tall
              </li>
              <li>
                <input type="checkbox" />
                Medium
              </li>
              <li>
                <input type="checkbox" />
                small
              </li>
            </ul>

            <h2>Ingredients</h2>
            <ul>
              <li>
                <input type="checkbox" />
                Corn flour
              </li>
              <li>
                <input type="checkbox" />
                Fruits
              </li>
              <li>
                <input type="checkbox" />
                yeast
              </li>
              <li>
                <input type="checkbox" />
                sugar
              </li>
              <li>
                <input type="checkbox" />
                Water
              </li>
              <li>
                <input type="checkbox" />
                Caffeine
              </li>
            </ul>

            <h2>Alcoholic</h2>
            <ul>
              <li>
                <input type="checkbox" />
                Yes
              </li>
              <li>
                <input type="checkbox" />
                No
              </li>
            </ul>

            <div className="end">
              <i className="fa-solid fa-right-from-bracket" />
              <p>Exist</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
