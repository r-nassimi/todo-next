import Router from 'next/router';

const About = () => {
  const handleMain = () => {
    Router.push('/');
  };

  const handleToDo = () => {
    Router.push('/todo');
  };

  return (
    <div className="container">
      <h3>
        This page was created just for presentation of opportunities next js
      </h3>

      <button onClick={handleMain}>Main</button>

      <button onClick={handleToDo}>ToDo</button>
    </div>
  );
};

export default About;
