// import OnScreenRender from "@components/OnScreenRender";
import EventListener from "@components/EventListener";
import "./App.css";
import FetchData from "@components/FetchData";
import ScreenSize from "@components/ScreenSize";
import ScreenSizeDebounce from "@components/ScreenSizeDebounce";
import Section from "@components/Section";
import Toggle from "@components/Toggle";
import VisibleElement from "@components/VisibleElement";
// import Toggle from "@components/Toggle";
// import FetchData from "@components/FetchData";

function App() {
  return (
    <>
      {/* <Section title={"useToggle"}>
        <Toggle />
      </Section> */}
      {/* <Section title={"useEventListener"}>
        <EventListener />
      </Section> */}
      {/* <Section title={"useScreenSize"}>
        <ScreenSize />
      </Section> */}
      {/* <Section title={"useScreenSizeDebounce"}>
        <ScreenSizeDebounce />
      </Section> */}
      {/* <Section title={"useFetch"}>
        <FetchData />
      </Section> */}
      <Section title={"useIsVisible"}>
        <VisibleElement />
      </Section>
    </>
  );
}

export default App;
