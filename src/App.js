import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminPage from './Component/AdminPage/AdminPage';
import MiddleAdmin from './Component/MiddleAdmin/MiddleAdmin';
import ProductPage from './Component/ProductPage/ProductPage';
import Addpro from './Component/Addpro/Addpro';
import SalesCon from './Component/SalesCon/SalesCon';
import FeedCon from './Component/FeedCon/FeedCon';
import OrderCon from './Component/OderCon/OrderCon';
import AdminLog from './Component/AdminLogIn/AdminLog';
import { AppProvider } from './Component/GlobalContext/GlobalContext';
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute"


function App() {
  return (

    <AppProvider>
      <Router>
        <Switch>
          {/* <Route exact path="/overview" component={AdminPage} /> */}
          {/* <Route exact path="/product" component={ProductPage} /> */}
          {/* <Route exact path="/addproduct" component={Addpro} /> */}
          {/* <Route exact path="/sales" component={SalesCon} /> */}
          {/* <Route exact path="/feed" component={FeedCon} /> */}
          {/* <Route exact path="/order" component={OrderCon} /> */}
          <Route exact path="/" component={AdminLog} />
          <PrivateRoute exact path="/overview" component={AdminPage} />
          <PrivateRoute exact path="/sales" component={SalesCon} />
          <PrivateRoute exact path="/addproduct" component={Addpro} />
          <PrivateRoute exact path="/product" component={ProductPage} />
          <PrivateRoute exact path="/feed" component={FeedCon} />
          <PrivateRoute exact path="/order" component={OrderCon} />
        </Switch>
      </Router>
    </AppProvider>

  );
}

export default App;
