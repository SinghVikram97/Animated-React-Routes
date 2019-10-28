import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import PageOne from "./Components/PageOne";
import Home from "./Components/Home";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import { useTransition, animated } from "react-spring";
function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0,0)" },
    leave: { opacity: 0, transform: "translate(-50%,0)" }
  });
  return (
    <div className="App">
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/one" component={PageOne} />
            <Route exact path="/two" component={PageTwo} />
            <Route exact path="/three" component={PageThree} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
