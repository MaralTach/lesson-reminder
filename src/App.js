import Header from "./components/Header/Header";

import { data } from "./helper/data";
console.log(data)

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
    <Header/>
    </header>
   
     <div className="main-container">
     {
       data.map((item,index)=>
     <div className="container" key={index}>
      <div className="image-container">
      <img src={item.image} alt="lesson" />
      </div>
       <div className="title">
      <p><span> Lesson: </span>{item.name}</p>
      <p><span>Hour:</span> {item.hour}</p>
        </div>
      </div>
   )
  }
     </div>
   
   
     
    </div>
  
  );
}

export default App;
