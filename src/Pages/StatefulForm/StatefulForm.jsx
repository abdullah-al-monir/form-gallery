import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 shadow-md border-2 rounded-lg shadow-sky-200">
        <h2 className="text-3xl my-4 font-bold">Stateful Form</h2>
        <form onSubmit={handleSubmit} className="text-lg space-y-5">
          <input
            onChange={handleNameChange}
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
          />
          <br />
          <input
            onChange={handleEmailChange}
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="email"
            name="email"
            placeholder="Your e-mail"
          />
          <br />
          <input
            onChange={handlePasswordChange}
            className="bg-gray-200 rounded-lg px-2 py-1 border-2 border-sky-200"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <input
            className="bg-sky-400 hover:bg-sky-500 hover:text-white font-semibold px-3 py-1 rounded-lg"
            type="Submit"
            value="Submit"
          />
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default StatefulForm;





