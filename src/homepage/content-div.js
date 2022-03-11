import "../App.css";
import "bootstrap";
import "react-bootstrap";
import data from "../data-objects/data";

export const ContentDiv = () => {
  return data.map((item) => {
    const { id, name, price, image } = item;
    return (
      <div className="display-content" key={id}>
        <img src={image} alt="images"></img>
        <div className="product-info">
          <span>{name}</span>
          <br></br>
          <span>{price}</span>
          <br></br>
          <button className="buy-btn">Buy</button>
        </div>
      </div>
    );
  });
};


// export default ContentDiv;
