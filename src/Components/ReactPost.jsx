import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillLike } from "react-icons/ai";

const ReactPost = ({ question, answers, id }) => {
  // definera state
  const [showAnswer, setShowAnswer] = useState(true);
  
  return (
    <article>
      <header className="question">
        <h3> Inlägg {id} </h3>
        <h3> {question} </h3>
        <div className="buttons">
        <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <button className="btn"> {<AiFillLike/>} </button>
        </div>
        <div className="info">
          {showAnswer && (
            <ul>
              {" "}
              {answers.map((answer) => (
                <li> {answer} </li>
              ))}{" "}
            </ul>
          )}
        </div>
      </header>
    </article>
  );
};

export default ReactPost;
