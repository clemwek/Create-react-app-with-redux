import axios from 'axios';

export const getTodoSuccess = (todo) => {
  return {
    type: 'GET_TODO_SUCCESS',
    todo
  };
}

export const addTodoSuccess = (todo) => {
  return {
    type: 'ADD_TODO_SUCCESS',
    todo
  };
}


const addToDoFailure = (error) => {
  return {
    type: 'ADD_TODO_FAILURE',
    error
  }
}


export const getTodo = () => {
  return (dispatch) => {
    return axios.get('http://localhost:5000/todo')
      .then(resp => {
        dispatch(getTodoSuccess(resp.data));
      })
      .catch(error => {
        console.log(error)
      });
  };
}

export const addTodo = (todo) => {
  return (dispatch) => {
    return axios.post('localhost:5000/todo', {
      todo
      })
      .then(response => {
        dispatch(addTodoSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(addToDoFailure(error))
      });
  };
}