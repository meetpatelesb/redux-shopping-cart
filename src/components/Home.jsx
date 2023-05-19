import React from "react";

const Home = (props) => {
  console.log(props);
  console.log(props,"props>>>>>>");
  return (
    <>
      <div className="add-to-cart">
        <img
          src="data:image/png;base64,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"
          alt="add to cart"
        />
      </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoORsMgLjVkljNp18L3rQa35YYwadAeV7GpXXO7DhY8CIi6uxbF5d3yyhBinHoJny2nZtFPG8EG4&usqp=CAU&ec=48665699"
            alt="iPhoneX"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone X</span>
          <br></br>
          <span>Price: $ 2500</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 10000, name: "iphoneX" })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoORsMgLjVkljNp18L3rQa35YYwadAeV7GpXXO7DhY8CIi6uxbF5d3yyhBinHoJny2nZtFPG8EG4&usqp=CAU&ec=48665699"
            alt="iPhoneX"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone X</span>
          <br></br>
          <span>Price: $ 2500</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 25000, name: "iphoneXI" })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
