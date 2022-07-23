import React, { RefAttributes } from "react";
import { Container, Ratio } from "react-bootstrap";

const SectionTwo = () => {
  return (
    <Container>
      <section id="section-two" className="mt-5">
        <h2 className="display-4 text-center">Coach Yukako</h2>
        <p className="text-center">
          Coach Yukako gives her thoughts on FSU tennis
        </p>
        <div className="ratio ratio-16x9">
          <iframe
            width="885"
            height="498"
            src="https://www.youtube.com/embed/9lYSIP1VsCQ"
            title="Senior Sit Down: Yukako Noi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Container>
  );
};

export default SectionTwo;
