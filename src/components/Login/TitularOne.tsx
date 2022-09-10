import styled from "styled-components";

export const TitularOne = ({ content }: any) => {
  return <EncabezadoOne>{content}</EncabezadoOne>;
};

const EncabezadoOne = styled.h1`
  font-size: 1.5em;
  color: #525252;
`;
