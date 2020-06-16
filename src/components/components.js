import React from "react";

const Header = () => {
  return (
    <nav className="navBar">
      <h3>Instagram</h3>
      <input className="searchField" placeholder="search"></input>
      <div>icons</div>
    </nav>
  );
};

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-pic"></div>
      <div className="profile-infos"></div>
    </section>
  );
};

const ProfileImages = () => {
  return (
    <section className="Profile-images">
      <img alt="img"></img>
      <img alt="img"></img>
      <img alt="img"></img>
    </section>
  );
};

const Gallery = (props) => {
  return (
    <section className="gallery">
      <div>
        <h4>Posts</h4>
        <h4>IGTV</h4>
        <h4>TAGGED</h4>
      </div>
      <div>
        {props.data.map(({ id, img }) => (
          <img key={id} src={img} alt="img" className="single-image" />
        ))}
      </div>
    </section>
  );
};

export { Header, Gallery, Profile, ProfileImages };
