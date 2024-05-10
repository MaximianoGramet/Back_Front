import React, { useState, useEffect } from "react";
import { Link } from "wouter";


const Cart = () => {
  const url="https://maxicrazystore.up.railway.app"
  const user = JSON.parse(localStorage.getItem('payload'));
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!user || !user.cart) return;
      setIsLoading(true);
      try {
        const response = await fetch(`${url}/api/carts/${user.cart}`);
        if (response.ok) {
          const data = await response.json();
          setCartProducts(data.cart.products);
        } else {
          console.error("Error fetching cart products");
        }
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
      setIsLoading(false);
    };

    fetchCartProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    // Logic to delete product from the cart (not implemented yet)
    setCartProducts(cartProducts.filter(product => product._id !== productId));
  };

  const handlePurchase = async () => {
    try {
      const response = await fetch(`${url}/api/carts/${user.cart}/purchase`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTicket(data);
        setPurchaseSuccess(true);
      } else {
        console.error("Error purchasing cart products");
      }
    } catch (error) {
      console.error("Error purchasing cart products:", error);
    }
  };

  const handleSaveTicket = () => {
    const ticketData = JSON.stringify(ticket);
    const blob = new Blob([ticketData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ticket.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isLoading) return <div>Loading...</div>;
  if (purchaseSuccess)
    return (
      <div>
        <h2>Purchase successful!</h2>
        {ticket && (
          <div>
            <h3>Your Ticket:</h3>
            <p>Code: {ticket.code}</p>
            <p>Amount: {ticket.amount}</p>
            <p>Date & Time: {ticket.date_time}</p>
            <button onClick={handleSaveTicket}>Save Ticket</button><br />
            <Link to="/products">Go Back</Link>
          </div>
        )}
      </div>
    );

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartProducts.map((product) => (
          <li key={product._id}>
            {product.title} - ${product.price}
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default Cart;
