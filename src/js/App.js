import React from "react";
import List from "./List.jsx";
import style from "./App.css";


function App (){
    return(
        <div className="todolist-app container  text-center">
           <List/>
        </div>
    );
};


export default App;