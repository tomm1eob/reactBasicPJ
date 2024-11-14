import React, { FC } from "react";

// Definición de la interfaz de props
interface IPropsMiPrimerComponent {
  text: string;
  color: string;
  fontSize: number;
}

// Definición del componente funcional
export const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({ text, color, fontSize }) => {
  return (
    <div style={{ color: color, fontSize: `${fontSize}rem` }}>
      <p>{text}</p>
    </div>
  );
};

export default MiPrimerComponent;