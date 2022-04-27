import emf from "./mocks/emf";

export const EMFViewer = () => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(emf, "text/xml");
  const elementsByTagName = xmlDoc.getElementsByTagName("xsi:type");

  // document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName(
  //   "title"
  // )[0].childNodes[0].nodeValue;
  return (
    <div>
      {JSON.stringify(elementsByTagName)}
      {/* {emf} */}
    </div>
  );
};
