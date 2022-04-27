import emf from "./mocks/emf";
import EPackage from "./epackage";

const parseEmf = (): EPackage => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(emf, "application/xml") as XMLDocument;
  const ePackage = doc.querySelectorAll("EPackage")[0];
  const epkg = new EPackage(ePackage);

  // console.log("doc?", ePackage);
  // console.log("package", epkg);

  return epkg;
};

export default parseEmf;
