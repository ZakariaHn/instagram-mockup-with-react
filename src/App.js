import React from "react";
import Gallery from "./components/Gallery";
import { Profile, ProfileImages } from "./components/Profile";
import Header from "./components/Header";
import Data from "./data.json";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Profile />
          <ProfileImages data={Data} />
          <Gallery data={Data} />
        </main>
      </React.Fragment>
    );
  }
}
