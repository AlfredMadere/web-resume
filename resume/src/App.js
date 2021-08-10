import AboutPage from "./pages/about/about.js";
import ExperiencePage from "./pages/experience.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AboutPage} />
      <Route exact path="/expereince" component={ExperiencePage} />
    </Switch>
  );
}

export default App;