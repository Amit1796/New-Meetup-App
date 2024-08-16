import { Route, Switch } from "react-router-dom";

import Layout from "./Componets/layouts/Layout";
import AllMeetUps from "./Pages/AllMeetUps";
import NewMeetups from "./Pages/NewMeetups";
import Favorites from "./Pages/Favorites";

function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact={true}>
        <AllMeetUps />
      </Route>
      <Route path='/new-meetups'>
        <NewMeetups />
      </Route>
      <Route path='/favorites'>
        <Favorites />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
