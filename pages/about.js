import Router from 'next/router';

const About = () => {
  const handleMain = () => {
    Router.push('/');
  };

  const handleToDo = () => {
    Router.push('/todo');
  };

  return (
    <div>
      <h1>
        This page was created just for presentation of opportunities next js
      </h1>

      <button onClick={handleMain}>Main</button>

      <button onClick={handleToDo}>ToDo</button>
    </div>
  );
};

export default About;
