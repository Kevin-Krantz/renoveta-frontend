import { IList } from "./IList";
import styled from "styled-components";

interface Props {
  list: IList[];
}

function HowRenovetaWorks({ list }: Props) {
  return (
    <div>
      <h1>Så här fungerar Renoveta</h1>
      {list.map((item: any) => (
        <div key={item.imgUrl}>
          <img src={item.imgUrl} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default HowRenovetaWorks;

const Container = styled.div`
  display: flexbox;
`;
