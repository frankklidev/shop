import styled from "styled-components";



export const BtnSingUp = ({children}:any) => {
  return <BotnSinUp>{children}</BotnSinUp>;
};

 const BotnSinUp = styled.button`
float: left;
background: #3498db;
width: 125px;
padding-top: 5px;
padding-bottom: 5px;
color: white;
border-radius: 4px;
border: #2980b9 1px solid;

margin-top: 20px;
margin-bottom: 20px;
margin-left: 10px;
font-weight: 800;
font-size: 0.8em;
`;
