import {useEffect, useState} from 'react';
import PurchaseRow from './PurchaseRow';
import { PurchaseType } from './types';
import { columnHeaderTitles } from './constants';
import './App.css';

const App = () => {
  const [purchases, setPurchases] = useState<Array<PurchaseType>>([]);

  const fetchData =  async () => {
    const response = await fetch('https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json');
    const data = await response.json();
    setPurchases(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <div className="purchases-wrapper">
        <div className="heading">
          Purchases
        </div>

        <div className="purchases-list">
          <div className="purchase-row header-row">
            {columnHeaderTitles.map(title => (
              <div className={`purchase-column column-header ${title.toLowerCase()}-header`}>{title}</div>
            ))}
          </div>

          {purchases.map(purchase => {
            return (
              <PurchaseRow purchase={purchase}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
