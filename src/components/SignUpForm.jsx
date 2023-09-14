import { useState } from "react";

const APIURL = "https://fsa-jwt-practice.herokuapp.com/signup"
export default function SignUpForm(setToken) {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);

    async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(APIURL, {
        method: "POST",
        body: JSON.stringify({userName: userName, password: password}),
        headers: {
          "Content-Type" : "application/json"
        }
      });
      const result = await response.json();
      console.log(result.token);
      setToken(result.token);
    } catch (error) {
      seterror(error.message);
    }
  }
  
  return (
  <>
  <h2>Sign Up or else.</h2> {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    <label>Username:{""} <input value={userName} onChange={(e) => setuserName(e.target.value)} />
    </label>
    <label>Password{""} <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
    </label>
    <button type="submit">Submit</button>
  </form>
  </>
  )
}