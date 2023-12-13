import Category from './Category';
import { PurchaseType } from './types';
import moreIcon from './more.png';
import { formatDate, formatDescription, formatPrice } from './utils';

type PropsType = {
  purchase: PurchaseType;
};

const PurchaseRow = ({purchase}: PropsType) => {  
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

      <div className="purchase-column price">{formatPrice(price)}</div>

      <div className="more">
        <img src={moreIcon}/>
      </div>
    </div>
  );
};

export default PurchaseRow;
