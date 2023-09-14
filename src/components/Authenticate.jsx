import { useState } from "react";

const APIURL = "https://fsa-jwt-practice.herokuapp.com/signup"
export default function Authenticate({token}) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  async function handleClick() {
    console.log("handle click works i think");
    try {
      const response = await fetch(APIURL, {
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log('it worked, thank god it worked');
      const username = result.data.username;
      setSuccessMessage(`${result.message} Welcome, ${userName}!`);
      return (result);
    } catch (error) {
      setError(error.message)
    }
  }
  return ( 
  <>
  <h2>Authenticated bruh</h2>
  {successMessage && <p>{successMessage}</p>}
  {error && <p>{error}</p>}
  <button onClick={handleClick}>Authenticate Token</button>
  </>
  );
}