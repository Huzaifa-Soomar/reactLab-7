import React from 'react';
import './App.css'; // Import global styles
import Navbar from './components/App.js/Navbar';
import LandingPage from './components/App.js/LandingPage';
import  Form  from './components/App.js/form';
import Footer from './components/App.js/footer';


function App() {
return (
<div>
<Navbar />
<LandingPage />
<Form />
<Footer />


</div>
);
}
export default App;