import './App.css';
import UsersPage from "./pages/usersPage/UsersPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import InformationPage from "./pages/informationPage/InformationPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App () {
    return(
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Footer/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/information" element={<InformationPage/>} />
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
    };

export default App;


