import React from 'react';
import './App.css'; // Import global styles
import Navbar from './components/App.js/Navbar';
import LandingPage from './components/App.js/LandingPage';
import Form from './form';
function App() {
return (
<div>
<Navbar />
<LandingPage />
<Form />
</div>
);
}
export default App;