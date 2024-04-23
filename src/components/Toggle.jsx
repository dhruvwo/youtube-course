import useToggle from "@hooks/useToggle";

export default function Toggle() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>Current Value: {value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
}
