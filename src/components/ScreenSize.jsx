import useWindowSize from "@hooks/useWindowSize";

function FetchData() {
  const { width } = useWindowSize();

  console.log("width", width);
  return (
    <div>
      <div>Screen Width: {width}</div>
    </div>
  );
}

export default FetchData;
