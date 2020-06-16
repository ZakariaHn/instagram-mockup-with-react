import React from "react";
import Header from "./components/Header";
import { Profile, ProfileImages } from "./components/Profile";
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Header />
          <Profile />
          <ProfileImages />
        </main>
      </React.Fragment>
    );
  }
}
