import { getList as listItem } from "./Sections";

function HowRenovetaWorks() {
  return (
    <div>
      <h1>Så här fungerar Renoveta</h1>
      {listItem.map((item) => (
        <div key={item.imgUrl}>
          <img>{item.imgUrl}</img>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default HowRenovetaWorks;
