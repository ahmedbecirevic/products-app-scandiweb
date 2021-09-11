import MainHeader from './components/MainHeader/MainHeader';
import ProductsList from './components/Products/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <ProductsList />
      </main>
    </>
  );
}

export default App;
