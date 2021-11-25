import { addComment } from "./action";

// o comment é o que recebemosde fora, no caso será o comentário
export const addCommentThunk = (comment) => {
  // no thunk retornamos uma função anonima
  return (dispatch, getState) => {
    //aqui estamos pegando o state user
    const { user } = getState();

    //aqui adicionamoso comentário que entrou como parametro lá em cima
    const updateUser = { ...user, comments: [...user.comments, comment] };

    //nessa linha damos o dispatch na nossa action, com a alteração feita
    dispatch(addComment(updateUser));

    console.log(comment);
  };
};
