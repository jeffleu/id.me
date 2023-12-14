import {useEffect, useState} from 'react';
//3rd party libraries
import { isBrowser, isMobile } from 'react-device-detect';
// Components
import PurchaseRow from './PurchaseRow/PurchaseRow';
// Constants
import { columnHeaderTitles } from './utils/constants';
import { PurchaseType } from './utils/types';
// CSS
import './App.css';

const App = () => {
  const [purchases, setPurchases] = useState<Array<PurchaseType>>([]);
  const platform = isMobile ? 'mobile' : 'desktop';

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
      <div className={`purchase-wrapper-${platform}`}>
        <div className={`heading-${platform}`}>
          Purchases
        </div>

        <div className={`purchases-list-${platform}`}>
          {isBrowser && (
            <div className="purchase-row header-row">
              {columnHeaderTitles.map(title => (
                <div key={title} className={`purchase-column column-header ${title.toLowerCase()}-header`}>{title}</div>
              ))}
            </div>
          )}

          {purchases.map(purchase => {
            return (
              <PurchaseRow key={purchase.id} isMobile={isMobile} purchase={purchase}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
