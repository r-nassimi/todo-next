import Head from "next/head";
import Sidebar from "./sidebar";

const Layout = ({ children }) => (
  <div className="Layout">
    <Head>
      <title>Layout example</title>
    </Head>

    <Sidebar />

    <main className="Main">{children}</main>
  </div>
);

export default Layout;
