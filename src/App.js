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
