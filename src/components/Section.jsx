function Section({ title, children }) {
  return (
    <div
      style={{
        height: "calc(100vh - 2px)",
        width: "calc(100vw - 50px)",
        border: "1px solid darkGrey",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
      }}
    >
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default Section;
