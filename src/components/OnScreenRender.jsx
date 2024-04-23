import useOnScreen from "@hooks/useOnScreen";
import { useRef } from "react";

const generateArrayOfStrings = () => {
  const array = [];
  for (let i = 1; i <= 1000; i++) {
    array.push({
      title: `This is list item number: ${i}`,
      image: `https://picsum.photos/200/300?random=${i}`,
    });
  }
  return array;
};

const items = generateArrayOfStrings();

function ListItem({ item }) {
  const itemRef = useRef();
  const size = useOnScreen(itemRef);
  return (
    <div
      ref={itemRef}
      style={{
        height: size?.height,
        width: size?.width,
      }}
    >
      {!size && (
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            margin: "5px",
          }}
        >
          <div>
            <img src={item.image} />
          </div>
          <div>{item.title}</div>
        </div>
      )}
    </div>
  );
}
function OnScreenRender() {
  return (
    <div
      style={{
        flexDirection: "column",
      }}
    >
      {items.map((item) => {
        return <ListItem item={item} key={item.title} />;
      })}
    </div>
  );
}

export default OnScreenRender;
