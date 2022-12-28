import React, {useState} from 'react';

/**
 * 
 * Lengkapi komponen "Todo" sesuai dengan kriteri berikut:
 *  1. Dapat menambahkan to-do.
 *  2. Dapat menampilkan daftar to-do.
 *  3. Dapat menghapus daftar to-do.
 */

const Todos = () =>  {
  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodoHandler = () => {
    setTodos((prevState) => {
      return [...prevState, 
        {id: +new Date(),
          name: input
        }]
    });

    setInput('');
  }

  const removeTodoHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id)
    });
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  }
  return (
    <div>
      <div>
        <input value={input} onChange={inputHandler} />
        <button onClick={addTodoHandler}>Add to-do</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => removeTodoHandler(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );

export default Todos;
