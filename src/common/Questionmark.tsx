import styled from "styled-components";
import { useState } from "react";

interface Props {
  text: string;
}
function Questionmark({ text }: Props) {
  const [showText, setShowText] = useState(false);

  const onClick = () => setShowText(!showText);

  return (
    <Container>
      <I className="fa-solid fa-circle-question fa-sm" onClick={onClick} />
      {showText ? <Textshow>{text}</Textshow> : <TextHidden />}
    </Container>
  );
}

export default Questionmark;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto, auto;
  cursor: pointer;
`;

const I = styled.i`
  color: var(--bg-secondary);
`;

const TextHidden = styled.p`
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s;
`;

const Textshow = styled.p`
  position: absolute;
  width: 200px;
  background-color: white;
  border: 1px solid var(--bg-secondary);
  z-index: 1000;
  font-size: 12px;
  text-align: left;
  font-weight: lighter;

  @media screen and (max-width: 1000px) {
    font-size: 10px;
  }
`;
