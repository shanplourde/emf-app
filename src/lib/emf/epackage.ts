import EClassifier from "./eclassifier";

class EPackage {
  name: string;
  nsURI: string;
  nsPrefix: string;
  eClassifiers: EClassifier[];

  constructor(packageElement: Element) {
    this.name = packageElement.getAttribute("name") as string;
    this.nsURI = packageElement.getAttribute("nsURI") as string;
    this.nsPrefix = packageElement.getAttribute("nsPrefix") as string;

    this.eClassifiers = [];
    const classifiers = packageElement.querySelectorAll("eClassifiers");
    classifiers.forEach((classifierElement: Element) => {
      this.eClassifiers.push(new EClassifier(classifierElement));
    });
  }
}

export default EPackage;
