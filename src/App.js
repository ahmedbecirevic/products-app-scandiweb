import MainHeader from './components/MainHeader/MainHeader';
import ProductsList from './components/Products/ProductsList';
import NewProduct from './components/Products/NewProduct/NewProduct';
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
            <Route exact component={NewProduct} path='/addproduct' />
          </Switch>
        </main>
      </ProductsProvider>
    </Router>
  );
}

export default App;
