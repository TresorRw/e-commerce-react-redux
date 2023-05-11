import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  if(isLoggedIn) {
    return <Layout />
  } else {
    return <Auth />
  }
}

export default App;
