import styled from "styled-components";

function End() {
  return (
    <Container>
      <img src="images\pink-rectangle-right.png" />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </Container>
  );
}

export default End;
const Container = styled.div`
  position: relative;
  text-align: left;

  img {
    position: absolute;
    bottom: 8px;
    width: 800px;
    height: 650px;
    padding-top: 200px;
  }

  p {
    position: absolute;
    width: 600px;
    top: 300px;
    left: 16px;
    text-align: left;
  }
`;
