import { useEffect, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const liStyle = {
  textDecorationLine: 'line-through',
  fontWeight: '100',
  fontStyle: 'italic',
};

const ToDo = () => {
  const initialState = [];
  const [data, setData] = useState(initialState);
  const [task, setTask] = useState('');
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') return;
    if (!editing) {
      const newTaskArr = [
        ...data,
        { id: data.length + 1, text: task, completed: false },
      ];
      setData(newTaskArr);
      setTask('');
    } else {
      const newArr = data.slice();
      const indexArr = newArr.map((arr) => arr.id);
      console.log(indexArr, 11);
      const index = indexArr.indexOf(editId);
      newArr.splice(index, 1, { id: editId, text: task, completed: false });
      setData(newArr);
      setTask('');
      setEditId('');

      //Без него кнопки в зависимости от того редактируется или добавляется компонент не меняются
      setEditing(false);
    }
  };

  const handleEdit = (id) => {
    const item = data.find((task) => task.id === id);
    setTask(item.text);
    setEditing(true);
    setEditId(item.id);
  };

  const handleCancel = () => {
    setEditing(false);
    setTask('');
    setEditId('');
  };

  const handleClear = () => {
    setData([]);
    return data;
  };

  const handleDelete = (id) => {
    setData(data.filter((task) => task.id !== id));
  };

  const handleCheck = (text, id) => {
    if (!data.find((data) => data.id === id).completed) {
      const newArr = data.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(id);
      newArr.splice(index, 1, { id, text, completed: true });
      setData(newArr);
    } else {
      const newArr = data.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(id);
      newArr.splice(index, 1, { id, text, completed: false });
      setData(newArr);
    }
  };

  useEffect(() => {
    const listData = JSON.parse(localStorage.getItem('Tasks'));
    if (listData) {
      setData(listData);
    }
  }, []);

  useEffect(() => {
    if (data !== initialState) {
      localStorage.setItem('Tasks', JSON.stringify(data));
    }
  }, [data]);

  const TasksList = data.map((task) => (
    <li
      className="list"
      style={task.completed ? liStyle : { textDecoration: 'none' }}
      key={task.id}
    >
      {task.text}
      <div>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
        <button onClick={() => handleEdit(task.id)}>Edit</button>
        <button onClick={() => handleCheck(task.text, task.id)}>
          Complete
        </button>
      </div>
    </li>
  ));

  return (
    <div className="Todo-list">
      <ToDoForm
        onSubmit={handleSubmit}
        value={task}
        onChange={handleChange}
        onClick={!editing ? handleClear : handleCancel}
        editing={editing}
      />

      <ToDoList>
        {data.length > 0 ? (
          TasksList
        ) : (
          <div>
            <p>Add new task</p>
          </div>
        )}
      </ToDoList>
    </div>
  );
};

export default ToDo;
