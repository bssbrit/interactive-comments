import { useState } from "react";
import CommentSection from "./components/commentSection";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  /* Temos que fazer fetch com a info no JSON e mandar de array no commentSection */
  return (
    <>
      <div>
        <h1>Interactive Comments Section</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <div>
            <CommentSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
