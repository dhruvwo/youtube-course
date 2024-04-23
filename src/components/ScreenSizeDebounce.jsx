import useWindowSizeDebounce from "@hooks/useWindowSizeDebounce";

function ScreenSizeDebounce() {
  const { width } = useWindowSizeDebounce();

  console.log("width", width);
  return (
    <div>
      <div>Screen Width Changed: {width}</div>
    </div>
  );
}

export default ScreenSizeDebounce;
