import styles from "./App.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import Dunzopartner from "./pages/dunzopartner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/dunzoclone">
            <Home />
          </Route>
          <Route path="/partner">
            <Dunzopartner />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
