import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Order from './pages/Order';
import Report from './pages/Report';
import NotFound from './pages/NotFound';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/AdminProducts';
import ProductAdd from './pages/admin/ProductAdd';
import ProductDetail from './pages/admin/ProductDetail';

function App() {

  const PrivateOrder = () => {
      const isAuth = false

      console.log('ok');
      if (!isAuth){
        return <Navigate to='/login' />
      }else{
        return <Order />
      }


  }

  return (
    <>
      <div className='container py-5'>
          <div className='row'>
            <div className='col-3'>
                <Sidebar />
            </div>
            <div className='col-9'>
                <Routes>

                    <Route path='*' element={<NotFound />} />

                    <Route path='/' element={<Home />} />

                    <Route path='/about' element={<About />} />

                    <Route path='/products' element={<Products />} />

                    <Route path='/san-pham/:slug-:id.html' element={<ProductDetail />} />

                    <Route path='/news' element={<News />} />

                    <Route path='/contact' element={<Contact />} />

                    <Route path='/login' element={<Login />} />

                    <Route element={<PrivateOrder />}>
                        <Route path='/order' element={<Order />} />

                        <Route path='/report' element={<Report />} />
                    </Route>

                    <Route path='/admin'>
                        <Route path='' element={<Dashboard />}/>
                        <Route path='products'>
                            <Route path='' element={<AdminProducts />}/>

                            <Route path='add' element={<ProductAdd />}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
