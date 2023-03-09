import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Footer from "./Footer";
import { Employee } from "./components/employee/Employee";
import { Student } from "./components/student/Student";

function App() {

  var title = "ROYAL"
  var name = "Rajavi";
  var age = 30;
  var isActive = true;
  var user = {
    name: "Parth",
    age: 28,
    isActive: false,
  };

  return (
    <div className="App">
      <Employee n ={name} user ={user}/>
      {/* <Student title = {title}/> */}
      {/* <Header /> */}
      {/* <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isActive ? "YES" : "No"}</h3>

      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.isActive ? "YES" : "No"}</h3> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
