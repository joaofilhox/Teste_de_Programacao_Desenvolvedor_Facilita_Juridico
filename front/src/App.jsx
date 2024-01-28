import Footer from './components/footer'
import Header from './components/header'
import { MainRoutes } from './routes/RoutesMain';
import './reset.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
       <Header />
      <MainRoutes />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
