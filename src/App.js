import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunks";
import { useState } from "react";

function App() {
  const comentario = useSelector((state) => state.user.comments);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <div className="divComentario">
          {comentario.map((coment, index) => (
            <div key={index}>
              <p>{coment}</p>
            </div>
          ))}
        </div>
        <div className="divInput">
          <input
            type="text"
            placeholder="Escreva aqui"
            onChange={(event) => setComment(event.target.value)}
          />
          <button onClick={() => dispatch(addCommentThunk(comment))}>
            Novo comentário
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
