import styled from "styled-components";
import { useState, useEffect } from "react";
import FAQSection from "./FAQSection";

function FAQ() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 880;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Container>
      {width < breakpoint ? (
        <FAQSection />
      ) : (
        <>
          <Img />
          <FAQSection />
        </>
      )}
    </Container>
  );
}

export default FAQ;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;

  @media screen and (max-width: 880px) {
    display: grid;
    grid-template-columns: 600px;
    margin-left: 20px;
    width: 600px;
  }
`;

const Img = styled.div`
  background: url("images/bg-photo-paint.png") left center / contain no-repeat
    fixed;
  min-height: 100vh;
  min-width: 60vw;

  @media screen and (max-width: 880px) {
    background-image: none;
  }
`;
