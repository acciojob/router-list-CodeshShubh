import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<ItemList/>} />
          <Route path="/items/:id" element = {<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
