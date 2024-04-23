// import OnScreenRender from "@components/OnScreenRender";
import "./App.css";
import ScreenSize from "@components/ScreenSize";
import Section from "@components/Section";
// import Toggle from "@components/Toggle";
// import FetchData from "@components/FetchData";

function App() {
  return (
    <>
      <Section title={"Screen Size"}>
        <ScreenSize />
      </Section>
      {/* <Section title={"Toggle"}>
        <Toggle />
      </Section>
      <Section title={"Fetch Data"}>
        <FetchData />
      </Section>
      <Section title={"On Screen"}>
        <OnScreenRender />
      </Section> */}
    </>
  );
}

export default App;
