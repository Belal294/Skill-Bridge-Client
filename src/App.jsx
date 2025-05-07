// App.jsx
import './App.css';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Toaster position="top-right" />
      <AppRoutes />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
