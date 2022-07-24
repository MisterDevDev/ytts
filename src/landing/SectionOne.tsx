import React from "react";
import { Container } from "react-bootstrap";

const SectionOne = () => {
  return (
    <Container>
      <section id="section-one" className="mt-5">
      <img style={{marginLeft: 'auto', marginRight:'auto', marginTop:'1rem', display:'block'}} 
        height={'300px'} width={'300px'} src='https://ytts-coaching.s3.us-east-2.amazonaws.com/YTTS-logos+2.JPEG'/>
        <h2 className="text-center mt-5 mb-2">What is YTTS?</h2>
        <p>
          YTTS is the ultimate travel tennis coaching service. Yuki Noi provides
          stellar mentorship, drawing from a wealth of experience from over 8
          years of D1 college competition and coaching. Clients receive in-depth
          tagging evaluations and personalized feedback.
        </p>
        <p>
          YTTS clients can expect quality time and commitment from their coach.
          YTTS goes above and beyond so that clients feel that their coach is
          accessible and constructive for meaningful improvement.
        </p>
        
      </section>
    </Container>
  );
};

export default SectionOne;
