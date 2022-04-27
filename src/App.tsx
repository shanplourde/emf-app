import "./styles.css";
// import { EMFViewer } from "./components/emf-viewer";
// import ECore from "./lib/emf/ecore";
import parseEmf from "./lib/emf";
import Renderer from "./lib/emf/renderer/class-diagram";

export default function App() {
  // const ecore = new ECore();
  // console.log("ecore", ecore);
  const parsedEmf = parseEmf();
  return (
    <div className="App">
      <Renderer ePackage={parsedEmf} />
    </div>
  );
}
