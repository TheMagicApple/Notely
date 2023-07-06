import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./stuff.jsx";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
	</BrowserRouter>

  );
}

export default App;
