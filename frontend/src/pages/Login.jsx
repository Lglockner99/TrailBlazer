import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2"
          value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
}
