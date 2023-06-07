import './App.css';

//  importing components
// import Header from './Header';


// mutliple importing object destructuring
// import { Header, Footer } from './Header';
import Student from './components/Student';


function App() {
  // let name = "san"
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Header/>
  //       <h1>{name}</h1>
  //       <Footer/>

  //     </header>
  //   </div>
  // );
// ----------------------------------------
return (
  <div>
    <Student
        name = "san"
        age = {23}
        
        />
         <Student
        name = "sanj"
        age = {23}
        
        />
         <Student
        name = "man"
        age = {23}
        
        />
       
  </div>
)
}

export default App;
