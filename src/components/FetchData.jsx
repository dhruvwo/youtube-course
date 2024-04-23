import useFetch from "@hooks/useFetch";
import { useState } from "react";

function FetchData() {
  const [id, setId] = useState(1);
  const [userId, setUserID] = useState(1);
  const { loading, error, value } = useFetch(`/posts/${id}`);
  const {
    loading: userLoading,
    error: userError,
    value: userValue,
  } = useFetch(`/users/${userId}`);
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        gap: 8,
        flex: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <h2>Posts</h2>
        <div>{id}</div>
        <button onClick={() => setId((currentId) => currentId + 1)}>
          Show Next Post
        </button>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {error ? (
              <>Error: {error.message || "Something went wrong!"}</>
            ) : (
              <>
                <div>Title: {value.title}</div>
                <div>Body: {value.body}</div>
              </>
            )}
          </>
        )}
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <h2>Users</h2>
        <div>{userId}</div>
        <button onClick={() => setUserID((currentId) => currentId + 1)}>
          Show Next User
        </button>
        {userLoading ? (
          <>Loading...</>
        ) : (
          <>
            {userError ? (
              <>Error: {userError.message || "Something went wrong!"}</>
            ) : (
              <>
                <div>Name: {userValue.name}</div>
                <div>Email: {userValue.email}</div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FetchData;
