import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.scss';

// Components imports
import Navbar from "./components/header/Navbar"
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer"
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import PageNotFound from "./components/page_not_found/PageNotFound";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProfiles } from "./features/profile/profileSlice";
import { getProjects, getProjectsSuccess, getProjectsFailure } from './features/project/projectSlice';

const App = () => {

  const dispatch = useDispatch();

  // dispatch the actions
  useEffect(()=>{
    fetchProfile();
    dispatch(fetchProjects());
  },[dispatch]);

  // fetch profiles
  const fetchProfile = ( ) => {
    axios
      .get("profile.json")
      .then((res) => {
        dispatch(getProfiles(res.data[0]))
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Asynchronous thunk action for fetching git profile
  const fetchProjects = () => {
    return async dispatch => {
      dispatch(getProjects());

      try {
        const response = await fetch('https://api.github.com/users/GemjuSherpa/repos')
        const data = await response.json()

        dispatch(getProjectsSuccess(data))
      } catch (error) {
        dispatch(getProjectsFailure())
      }
    }
  }

  return (

      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/experience" element={<Experience/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route element={<PageNotFound/>} />
          </Routes>

          <Footer />
        </div>
      </Router>

  );
}

export default App;
