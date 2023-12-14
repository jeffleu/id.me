// 3rd party libraries
import { isMobile } from 'react-device-detect';
// Components
import Category from './Category';
// Constants
import { PurchaseType } from './types';
// Utils
import { formatDate, formatDescription, formatPrice } from './utils';
// Assets
import moreIcon from './more.png';

type PropsType = {
  purchase: PurchaseType;
};

const PurchaseRowDesktop = ({purchase}: PropsType) => {
  const {category, description, location, name, price, purchaseDate} = purchase;
  return (
    <div className="purchase-row">
      <div className="purchase-column">
        <span className="name">{name}</span>
      </div>

      <div className="purchase-column">
        <img className="location-image" src={location}/>
      </div>

      <div className="purchase-column">{formatDate(purchaseDate)}</div>

      <div className="purchase-column center">
        <Category category={category}/>
      </div>

      <div className="purchase-column">
        <span className="description">{formatDescription(description)}</span>
      </div>

      <div className="purchase-column price">
        {formatPrice(price)}
      </div>

      <div className="more">
          <img className="more-icon" src={moreIcon}/>
        </div>
    </div>
  );
};

const PurchaseRowMobile = ({purchase}: PropsType) => {
  const {category, description, location, name, price, purchaseDate} = purchase;

  return (
    <div className="purchase-row-mobile">
      {/* Top row that shows location (image), name, price */}
      <div className="mobile-card-top-row">
        <div className="mobile-location-name-wrapper">
          <div className="mobile-card-image">
            <img className="location-image-mobile" src={location}/>
          </div>

          <div className="mobile-card-name-wrapper">
            <span className="mobile-card-name">{name}</span>
          </div>
        </div>

        <div className="mobile-card-price">{formatPrice(price)}</div>
      </div>

      {/* Shows description of purchase */}
      <div className="mobile-card-description">
        {formatDescription(description)}
      </div>

      {/* Shows purchase date title and date */}
      <div>
        <div className="mobile-card-date-title">Purchase Date</div>
        <div className="mobile-card-date">{formatDate(purchaseDate, true)}</div>
      </div>
    </div>
  );
};

const PurchaseRow = ({purchase}: PropsType) => {  
  const Wrapper = isMobile ? PurchaseRowMobile : PurchaseRowDesktop;
  return <Wrapper purchase={purchase}></Wrapper>
};

export default PurchaseRow;
