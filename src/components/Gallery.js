import React from "react";

const Gellery = (props) => {
  return (
    <section className="gallery">
      <div>
        <h4>Posts</h4>
        <h4>IGTV</h4>
        <h4>TAGGED</h4>
      </div>
      <div className="gallery-photos">
        {props.data.map(({ id, img }) => (
          <img key={id} src={img} alt="img" />
        ))}
      </div>
    </section>
  );
};

export default Gellery;
