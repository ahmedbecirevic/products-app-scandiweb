import MainHeader from './components/MainHeader/MainHeader';
import ProductsList from './components/Products/ProductsList';
import Form from './components/Products/NewProduct/Form';
import ProductsProvider from './store/ProductsProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <ProductsProvider>
        <MainHeader />
        <main>
          <Switch>
            <Route exact component={ProductsList} path='/' />
            <Route exact component={Form} path='/add-product' />
          </Switch>
        </main>
      </ProductsProvider>
    </Router>
  );
}

export default App;
