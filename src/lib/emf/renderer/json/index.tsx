import React from "react";
import EPackage from "../../epackage";

type Props = {
  ePackage: EPackage;
};
const Renderer: React.FC<Props> = ({ ePackage }) => {
  // const ecore = new ECore();
  // console.log("ecore", ecore);
  return (
    <div>
      <h1>Class diagram renderer</h1>
      <pre>{JSON.stringify(ePackage, null, 2)}</pre>
    </div>
  );
};

export default Renderer;
