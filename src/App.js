
import { Route, Routes } from 'react-router-dom';

//admin
import AdminHeader from './Admin/Header/AdminHeader';
import Home from './Admin/Pages/Home';
import Product from './Admin/Pages/Product';
import About from './Admin/Pages/About';
import Contact from './Admin/Pages/Contact';

//user
import UserHome from './User/Pages/Home';
import UserNavbar from './User/Header/UserNavbar';
import UserProduct from './User/Pages/Product';
import UserAbout from './User/Pages/About';
import Users from "./Admin/Pages/Users";





function App() {

  let role = "admin"

  if(role==='admin')
  {
    return (
      <>
       <AdminHeader/>
       <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path="/users" exact element={<Users/>} />
          <Route path='/product' exact element={<Product/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route/>
       </Routes>
      </>
     );
  }else if(role==='user')
  {
    return( 
    <>
      <UserNavbar/>
      <Routes>
          <Route path='/' element={<UserHome/>}/>
          <Route path='/product' element={<UserProduct/>}/>
          <Route path='/about' element={<UserAbout/>}/>
          <Route/>
       </Routes>
    </>
    )
  }
  else{
    return <h1>Not found</h1>
  }
}

export default App;

