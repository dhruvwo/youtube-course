import useFetch from "@hooks/useFetch";
import useWindowSize from "@hooks/useWindowSize";
import { useState } from "react";

function FetchData() {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(`/todos/${id}`, {});
  const { width } = useWindowSize();

  console.log("width", width);
  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  );
}

export default FetchData;
