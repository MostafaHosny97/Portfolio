import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { HashRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./sass/App.scss";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
