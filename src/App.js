
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/footer/footer';
import Dashboard from './components/hero/dashboard';
import Property from './components/hero/property';
import ShowMessagesTable from './components/hero/showMessages';
import NavBar from './components/nav/nav';
import Login from './helpers/Login';


function App() {
  //TODO  add a chat messenger so that the landlord can message all of his tenants, and the tenants can message the landlord, will switch between
  // TODO the different tenants and pull up their chats. 
  //TODO need to add a Pay Page for stripe, cc, paypal, cashapp etc 
const username = ''
const isLoggedIn = false 
  return (
  
<div className="App">
<Router>
    <NavBar/>
    {isLoggedIn === false ? (
    <Routes>
      <Route
           path='/'
            element={
              <Login user={username} />
            }
          />
    </Routes>
    ) : (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
       <Route path='/showMessages' element={<ShowMessagesTable />} />
       <Route path='/properties' element={<Property />} />
    </Routes>
    )}


  <Footer />
</Router>
</div>
  );
}

export default App;
