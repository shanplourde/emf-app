import React from "react";
import EPackage from "../../epackage";
import EClassifier from "../../eclassifier";

type Props = {
  ePackage: EPackage;
};
const Renderer: React.FC<Props> = ({ ePackage }) => {
  const renderClassifiers = () => {
    return ePackage.eClassifiers.map((classifier: EClassifier) => (
      <div
        style={{ width: "200px", height: "200px", border: "1px solid green" }}
      >
        {classifier.name}
      </div>
    ));
  };
  return (
    <div>
      <h1>Class diagram renderer</h1>
      {renderClassifiers()}
      {/* <pre>{JSON.stringify(ePackage, null, 2)}</pre> */}
    </div>
  );
};

export default Renderer;
