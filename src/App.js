// import logo from "./logo.svg";
import "./App.css";
import Heading from "./componants/Heading";
// import Heading2 from "./componants/Heading";
import { useState } from "react";

export default function App() {
  const [type, setType] = useState("para");
  return (
    <div className="App">
      <Heading head={"React Is easy"} type={type} />
      <button
        onClick={() => {
          setType("heading");
        }}
      >
        Submit h1
      </button>
      <button
        onClick={() => {
          setType("heading2");
        }}
      >
        Submit h2
      </button>
      <button
        onClick={() => {
          setType("heading3");
        }}
      >
        Submit h2
      </button>
    </div>
  );
}
