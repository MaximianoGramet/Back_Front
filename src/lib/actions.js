const url = "https://maxicrazystore.up.railway.app"; //"maxicrazystore.up.railway.app";

export async function onAddToCart(productId, user) {
  const requestData = {
    email: user.email,
  };

  try {
    const response = await fetch(
      `${url}/api/carts/${user.cart}/products/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    if (response.ok) {
      console.log("Product added to cart successfully");
    } else {
      console.error("Failed to add product to cart");
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}

export async function login(email, password) {
  try {
    const response = await fetch(`${url}/api/sessions/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error("An error occurred while logging in");
  }
}

export async function logout() {
  try {
    const response = await fetch(`${url}/api/sessions/logout`);
    if (response.ok) {
      return true;
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error("An error occurred while logging out");
  }
}

export async function getCurrentUser() {
  try {
    const response = await fetch(`${url}/api/sessions/current`, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const user = await response.json();
      return { success: true, user };
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error("An error occurred while fetching current user");
  }
}

export async function createCart() {
  try {
    const response = await fetch(`${url}/api/carts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("New cart created successfully");
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error("An error occurred while creating a new cart");
  }
}
