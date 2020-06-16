import React from "react";

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
export default Gallery;
