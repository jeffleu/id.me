import { PurchaseType } from './types';

type PropsType = {
  purchase: PurchaseType;
};

const PurchaseRow = ({purchase}: PropsType) => {  
  const {category, description, location, name, price, purchaseDate} = purchase;

  return (
    <div className="purchase-row">
      <div className="purchase-column">{name}</div>
      <div className="purchase-column"><img className="location-image" src={location}/></div>
      <div className="purchase-column">{purchaseDate}</div>
      <div className="purchase-column">{category}</div>
      <div className="purchase-column">{description}</div>
      <div className="purchase-column">{price}</div>
    </div>
  );
};

export default PurchaseRow;
