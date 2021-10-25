import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Films from './Films';
import FilmsDetails from "./FilmsDetails";
import People from './People';

const App = () => {
 
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:filmsid">
                    <FilmsDetails />
                    </Route>
                <Route exact path="/people">
                    <People />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;