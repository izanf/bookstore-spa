import { Routes as Router, Route } from 'react-router-dom';

import List from './List';
import Book from './Book';

const Routes = () => (
  <Router>
    <Route index element={<List />} />
    <Route path="/register" element={<Book />} />
  </Router>
);

export default Routes;
