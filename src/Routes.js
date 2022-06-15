import { Routes as Router, Route } from 'react-router-dom';

import Home from './screens/Home';
import Details from './screens/Details';
import Admin from './screens/Admin';
import AdminList from './screens/Admin/List';
import AdminBook from './screens/Admin/Book';

const Routes = () => (
  <Router>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Route>
    <Route path="/admin" element={<Admin />}>
      <Route index element={<AdminList />} />
      <Route path="/admin/register" element={<AdminBook />} />
    </Route>
  </Router>
);

export default Routes;
