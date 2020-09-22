import {createStore} from 'redux';

// Action type

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// action

export const addTodoAction = todo => ({
  type: ADD_TODO,
  payload: todo,
});
export const deleteTodoAction = id => ({
  type: DELETE_TODO,
  payload: id,
});
export const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

// reducer

const initialState = {
  todos: [
    {id: 1, name: 'learn redux', completed: false},
    {id: 2, name: 'learn react', completed: true},
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo,
        ),
      };

    default:
      return state;
  }
};

//  store

export const store = createStore(reducer);
