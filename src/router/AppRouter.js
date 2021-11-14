import React, { Fragment } from "react";
import { Router } from "@reach/router";

//Views
import Home from "../views/home/Home";

//Componets
import NavBar from "../components/navbar/NavBar";

export default function AppRouter() {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Home path="/" />
      </Router>
    </Fragment>
  );
}
