import'./Card.css';


const Card = ({category,description,id,image,price,title}:any) => {
  return (
    <div className="productsWrapper">

    <div className="card cartCard">
      <img src={image} className="img"/>
      <h3>{title}</h3>
      <h2>{price}€</h2>
      <a href="#" className="buy">Buy Now</a>
    </div>
  
  </div>

  );
};

export default Card;
