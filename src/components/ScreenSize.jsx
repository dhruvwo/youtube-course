import useWindowSize from "@hooks/useWindowSize";

function ScreenSize() {
  const { width } = useWindowSize();

  console.log("width", width);
  return (
    <div>
      <div>Screen Width: {width}</div>
    </div>
  );
}

export default ScreenSize;
