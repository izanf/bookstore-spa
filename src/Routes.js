import { Routes as Router, Route } from 'react-router-dom';

import Home from './screens/Home';
import Details from './screens/Details';

const Routes = () => (
  <Router>
    <Route path="/" element={<Home />} exact />
    <Route path="/details" element={<Details />} />
  </Router>
);

export default Routes;
