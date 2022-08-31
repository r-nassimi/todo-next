import Layout from '../components/layout';
import '../global.css';

const App = ({ Component, pageProps }) => (
  <div className="container">
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);

export default App;
