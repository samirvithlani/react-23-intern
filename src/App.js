import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Footer from "./Footer";
import { Employee } from "./components/employee/Employee";
// import { Student } from "./components/student/Student";

import { Navbar } from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { FeedBack } from "./pages/FeedBack";
import { Manager } from "./pages/Manager";
import { Director } from "./pages/Director";
import { Management } from "./pages/Management";
import { Student } from "./components/forms/Student";
import { UserApi } from "./api/UserApi";
import { UserNavbar } from "./api/UserNavbar";
import { UserReg } from "./api/UserReg";
import { UserRegi } from "./components/users/UserRegi";
import { UserLogin } from "./components/users/UserLogin";

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
      {/* <Navbar/> */}
    {/* <UserRegi/> */}
    <UserLogin/>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path ="/feedback/:id" element={<FeedBack/>}/>
        <Route path="/contactus/manager" element={<Manager/>}/>
        <Route path="/contactus/director" element={<Director/>}/>
        <Route path ="/management" element = {<Management/>}/>
        <Route path ="/*" element={<h1>404 Not Found</h1>}/>
        <Route path = "/addstudent" element = {<Student/>} />
        <Route path="/userNavbar" element={<UserNavbar/>}/>
        <Route path ="/userApi" element = {<UserApi/>}/>
        <Route path="/userreg" element= {<UserReg/>}/>


      </Routes>
      {/* <Employee n ={name} user ={user}/> */}
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
