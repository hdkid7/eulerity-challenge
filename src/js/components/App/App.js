import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import SliderView from "../SliderView/SliderView";

import store from "../../store"
import Header from "../Header/Header";
import {Provider} from "react-redux"
const App = () => {

  return (
    <Provider store={store}>
        <Header />
            <Switch>
              <Route path="/about">
                <h1>HELLO ABOUT</h1>
              </Route>
              <Route path="/">
                <SliderView />
              </Route>
            </Switch>
    </Provider>
  );
};

export default App