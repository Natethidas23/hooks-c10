import { useState } from "react";

export default function Login() {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  if (isLoggedIn) {
    return (
      <section>
        <h1>Welcome Back</h1>
        <button onClick={() => setIsLoggedin(false)}>Logout</button>
      </section>
    );
  }

  return (
    <section>
      <h1>Please Login..</h1>
      <button onClick={() => setIsLoggedin(true)}>Login</button>
    </section>
  );
}
