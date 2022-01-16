import { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillLike } from "react-icons/ai";
import PostLiked from "./PostLiked";

const ReactPost = ({ question, answers, id }) => {
  // definera state
  const [showAnswer, setShowAnswer] = useState(false);
  const [postLiked, setPostLiked] = useState(false);

  // define the function

  const toggleLikeButton = () => {
    setPostLiked(!postLiked);
  };
  const PostHandler = () => {
    <PostLiked />;
  };
  return (
    <article>
      <header className="question">
        <h3> Inlägg {id} </h3>
        <h3> {question} </h3>
        <div className="buttons">
          <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
          <button
            onClick={toggleLikeButton}
            className={postLiked ? "btn_hide" : "btn btn_like"}
          >
            {" "}
            {<AiFillLike />}{" "}
          </button>
          {postLiked && <PostLiked postLiked={postLiked} />}
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
