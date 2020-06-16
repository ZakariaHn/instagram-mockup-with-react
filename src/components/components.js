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
      <div className="profile-pic">
        <img src="./img/7.jpg" alt="alt"></img>
      </div>
      <div className="profile-infos">
        <div>
          <h2>Dionysus</h2>
          <button>Follow</button>
          <button>v</button>
          <button>. . .</button>
        </div>
        <div>
          <h5>4,532 posts</h5>
          <h5>201m followers</h5>
          <h5>1000 following</h5>
        </div>
        <div>
          <h4>Dionysus</h4>
          <p className="bio">
            also spelled Dionysos, also called Bacchus or (in Rome) Liber Pater,
            in Greco-Roman religion, a nature god of fruitfulness and
            vegetation, especially known as a god of wine and ecstasy.
          </p>
        </div>
      </div>
    </section>
  );
};

const ProfileImages = (props) => {
  return (
    <section className="Profile-images">
      {props.data.map(({ id, img }) => (
        <img key={id} src={img} alt="img" className="single-image" />
      ))}
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
