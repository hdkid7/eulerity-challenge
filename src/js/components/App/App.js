import {
  
  Switch,
  Route,
 
} from "react-router-dom";

import SliderView from "../../Views/SliderView";

import store from "../../store"
import Header from "../Header/Header";
import {Provider} from "react-redux"
import AboutView from "../../Views/AboutView";
const App = () => {

  return (
    <Provider store={store}>
        <Header />
            <Switch>
              <Route path="/about">
                <AboutView/>
              </Route>
              <Route path="/">
                <SliderView />
              </Route>
            </Switch>
    </Provider>
  );
};

export default App