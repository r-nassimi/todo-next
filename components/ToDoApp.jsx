import { useEffect, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const liStyle = {
  display: 'flex',
  aligmItems: 'center',
  justifyContent: 'center',
  textDecorationLine: 'line-through',
  fontWeight: '100',
  fontStyle: 'italic',
};

const ToDo = () => {
  const initialState = [];
  const [data, setData] = useState(initialState);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === '') return;
    if (!isEditing) {
      const newTasks = [
        ...data,
        { id: data.length + 1, text: task, completed: false },
      ];
      setData(newTasks);
      setTask('');
    } else {
      const newArr = data.slice();
      const indexArr = newArr.map((item) => item.id);
      const index = indexArr.indexOf(editId);
      newArr.splice(index, 1, { id: editId, text: task, completed: false });
      setData(newArr);
      setTask('');
      setEditId('');

      //Без него кнопки в зависимости от того редактируется или добавляется компонент не меняются
      setIsEditing(false);
    }
  };

  const handleEdit = (id) => {
    const item = data.find((task) => task.id === id);
    setTask(item.text);
    setIsEditing(true);
    setEditId(item.id);
  };

  const handleCancel = () => {
    setIsEditing(false);
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
    const newArr = data.slice();
    const indexArr = newArr.map((arr) => arr.id);
    const index = indexArr.indexOf(id);
    !data.find((data) => data.id === id).completed
      ? newArr.splice(index, 1, { id, text, completed: true })
      : newArr.splice(index, 1, { id, text, completed: false });
    setData(newArr);
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
    <div className="ToDoComponent">
      <ToDoForm
        onSubmit={handleSubmit}
        value={task}
        onChange={handleChange}
        onClick={!isEditing ? handleClear : handleCancel}
        isEditing={isEditing}
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
