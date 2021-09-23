import MainHeader from './components/MainHeader/MainHeader';
import ProductsList from './components/Products/ProductsList';
import Form from './components/Products/NewProduct/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MainHeader />
      <main>
        <Switch>
          <Route exact component={ProductsList} path='/' />
          <Route exact component={Form} path='/add-product' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
