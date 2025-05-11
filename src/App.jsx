import './App.css';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import { HashRouter } from 'react-router-dom'; 
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Toaster position="top-right" />
        <AppRoutes />
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
