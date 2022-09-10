import { useEffect } from "react";
import {Box} from "../components/Login/Box";
import {BtnSingIn} from "../components/Login/BtnSingIn";
import {BtnSingUp} from "../components/Login/BtnSingUp";
import {InputEmail} from "../components/Login/InputEmail";
import {InputPassword} from "../components/Login/InputPassword";
import {TitularOne} from "../components/Login/TitularOne";

const Login: React.FC = () => {
  

  
  return (
    <Box>
      <TitularOne>LogInasdasd</TitularOne>
      <InputEmail />
      <InputPassword />
      <BtnSingIn>SingIn</BtnSingIn>
      <BtnSingUp>SingUp</BtnSingUp>
    </Box>
  );
};

export default Login;
