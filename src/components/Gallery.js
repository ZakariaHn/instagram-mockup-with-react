import React from "react";
import Data from "../data.json";
const Gellery = () => {
  return (
    <section className="gallery">
      <div>
        <h4>Posts</h4>
        <h4>IGTV</h4>
        <h4>TAGGED</h4>
      </div>
      <div className="gallery-photos">
        {Data.map(({ id, img }) => (
          <img key={id} src={img} alt="img" />
        ))}
      </div>
    </section>
  );
};

export default Gellery;
