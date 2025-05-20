import './App.css';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e2e8f0] via-[#ffffff] to-[#edf2f7]">
      <AuthProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
