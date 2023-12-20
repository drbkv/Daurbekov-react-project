import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs/AboutUs";
import MainPage from "./Pages/MainPage/MainPage";
import LoginForm from "./Pages/Login/LoginForm";
import WatchServiceCenter from "./Pages/Service/WatchServiceCenter";
import PartnersPage from "./Pages/Partner/PartnersPage";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Answer from "./Pages/Answer/Answer";
import Sertificat from "./Pages/Sertificat/Sertificat";
import Zapis from "./Pages/Zapis/Zapis";



class App extends React.Component {


  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/Sertificat" element={<Sertificat />} />
            <Route path="/Answer" element={<Answer />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/partner" element={<PartnersPage/>} />
            <Route path="/WatchServiceCenter" element={<WatchServiceCenter/>} />
            <Route path="/user" element={<UserProfile/>}/>
            <Route path="/Zapis" element={<Zapis/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
