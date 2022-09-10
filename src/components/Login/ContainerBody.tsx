import styled from "styled-components";

export const ContainerBody = ({children}:any) => {
  return <>
   <Contenedor>{children}</Contenedor>;
   <EncabezadoOne>Locura</EncabezadoOne>
  </>
};

const Contenedor = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #3498db;
  margin: 0 auto 0 auto;
  width: 100%;
  text-align: center;
  margin: 20px 0px 20px 0px;
`;
const EncabezadoOne = styled.h1`
  font-size: 1.5em;
  color: #525252;
`;
