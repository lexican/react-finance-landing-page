import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Router>
    </>
  );
}

export default App;