import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import ToDoApp from "../components/ToDoApp"

const ToDo = () => (
  <ToDoApp />
)

export default ToDo;

ToDo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
