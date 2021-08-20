import HomePage from "./pages/home/home.js";
import ExperiencePage from "./pages/experience/experience.js";
import AboutPage from "./pages/about/about.js";
import SkillsPage from "./pages/skills/skills.js";
import EducationPage from "./pages/education/education.js";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/expereince" component={ExperiencePage} />
      <Route exact path="/education" component={EducationPage} />
      <Route exact path="/skills" component={SkillsPage} />
    </Switch>
  );
}

export default App;
