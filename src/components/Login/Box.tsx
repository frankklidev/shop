import styled from "styled-components";


export const Box = ({children}:any) => {
  return <Caja>{children}</Caja>;
};


const Caja = styled.div`
  background: white;
  width: 300px;
  border-radius: 6px;
  margin: 0 auto 0 auto;
  padding: 0px 0px 70px 0px;
  border: #2980b9 4px solid;
`;
