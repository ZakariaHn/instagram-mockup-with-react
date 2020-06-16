import React from "react";
import Header from "./components/Header";
import { Profile, ProfileImages } from "./components/Profile";
import Gallery from "./components/Gallery";
import Data from "./data.json";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Header />
          <Profile />
          <ProfileImages />
          <Gallery data={Data} />
        </main>
      </React.Fragment>
    );
  }
}
