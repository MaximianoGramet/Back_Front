import React, { useEffect, useState } from "react";
import ListaProductos from "./ListaProductos";
import { logout } from "../lib/actions";
import { Redirect } from "wouter";
import Navbar from "./Navbar"


const ComponenteSolicitud = () => {
  const [data, setData] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const storedPayload = JSON.parse(localStorage.getItem('payload'));
//https://maxicrazystore.up.railway.app/api/products
  useEffect(() => {
    fetch('https://maxicrazystore.up.railway.app/api/products', {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al obtener los datos:', error));

  }, []);

  const handleLogout = async () => {
    try {
      const success = await logout();
      if (success) {
        setRedirect(true);
        console.log("Logout successful");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Navbar/>
      <div>
        <p>Welcome {storedPayload.name}!!!</p>
        {data && <ListaProductos productos={data} />}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ComponenteSolicitud;
