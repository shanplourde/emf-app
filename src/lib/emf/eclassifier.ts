import EAnnotation from "./eannotation";
class EClassifier {
  name: string;
  eAnnotations: EAnnotation[];
  // nsURI: string;
  // nsPrefix: string;

  constructor(classifierElement: Element) {
    // this.name = packageElement.getAttribute("name") as string;
    // this.nsURI = packageElement.getAttribute("nsURI") as string;
    // this.nsPrefix = packageElement.getAttribute("nsPrefix") as string;
    this.name = classifierElement.getAttribute("name") as string;
    this.eAnnotations = [];
    const annotations = classifierElement.querySelectorAll("eAnnotations");
    annotations?.forEach((annotation) => {
      this.eAnnotations.push(new EAnnotation(annotation));
    });
    // console.log("eclasssifiers.ts", classifierElement, annotations);
  }
}

export default EClassifier;
