import styled from 'styled-components';



export const InputPassword = ({children}:any) => {
  return (
    <Password></Password>
  )
}

 const Password = styled.input`
background:#ecf0f1;
border: #ccc 1px solid;
border-bottom: #ccc 2px solid;
padding: 8px;
width:250px;
color:black;
margin-top:10px;
font-size:1em;
border-radius:4px;
margin-left:10px;
`;