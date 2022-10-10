function Product({ product, addToBasket, removeFromBasket, basket, balance,deleteProduct }) {
  let c=basket?.find((t)=>t.id===product.id)
  // 
    return (
      <div className="product">
        <button id="btn" onClick={()=>deleteProduct(product.id)}>X</button>
        <img src={product.image} alt="" />
        <div className="text">
        <h2>{product.name}</h2>
        <h4>${product.price}</h4>
        </div>
        <div className="operation">
          <button
           disabled={!c}
            onClick={() => removeFromBasket(product.id)}
            className="sell"
          >
            Sell
          </button>
          <h3>{c?.count || 0}</h3>
          <button
            disabled={product.price > balance}
            onClick={() => addToBasket(product.id)}
            className="buy"
          >
            Buy
          </button>
        </div>
      </div>
    );
  }

export default Product