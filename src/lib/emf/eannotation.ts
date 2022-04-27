type EAnnotationDetail = {
  key: string;
  value: string;
};

class EAnnotation {
  source: string;
  details: EAnnotationDetail[];
  // nsURI: string;
  // nsPrefix: string;

  constructor(annotationElement: Element) {
    // this.name = packageElement.getAttribute("name") as string;
    // this.nsURI = packageElement.getAttribute("nsURI") as string;
    // this.nsPrefix = packageElement.getAttribute("nsPrefix") as string;
    this.details = [];
    this.source = annotationElement.getAttribute("source") as string;
    const parsedDetails = annotationElement.querySelectorAll("details");
    parsedDetails?.forEach((detail) => {
      this.details.push({
        key: detail.getAttribute("key") as string,
        value: detail.getAttribute("value") as string
      });
    });
  }
}

export default EAnnotation;
