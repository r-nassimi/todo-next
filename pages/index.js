import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Index() {
  return (
    <div>
      <p>This page was created to show layout opportunities </p>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <div className="layout">
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    </div>
  );
};
