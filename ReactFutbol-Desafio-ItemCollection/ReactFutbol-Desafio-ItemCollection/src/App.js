import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { CartProvider } from './context/CarContext';
import { AuthContextProvider } from './context/AuthContext';
import AppRouter from './routes/AppRouter';

function App() {

  return (


    <AuthContextProvider>
      <CartProvider>
        <AppRouter />

      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
