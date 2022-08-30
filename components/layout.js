import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Layout example</title>
    </Head>
    <main>{children}</main>
  </div>
)

export default Layout;
