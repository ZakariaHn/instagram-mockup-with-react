import React from "react";

import {
  Gallery,
  Header,
  Profile,
  ProfileImages,
} from "./components/components";

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
