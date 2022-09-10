import styled from "styled-components";

const Container = styled.body`
  background-color: white;
`;


const Wrapper = styled.div`
  height: 420px;
  width: 654px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  /* VIA CSS MATIC https://goo.gl/cIbnS */
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
`;
const ProductImg = styled.div`
  float: left;
  height: 420px;
  width: 327px;
`;

const Image = styled.img`
  border-radius: 7px 0 0 7px;
`;

const ProductInfo = styled.div`
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
`;

const ProductText = styled.div`
  height: 300px;
  width: 327px;
`;

const ProductTextH1 = styled.h1`
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: #474747;
  font-family: "Bentham", serif;
`;

// const ProductPriceBtnParagraph = styled.p`
//   font-family: "Bentham", serif;
// `;

const ProductTextH2 = styled.h2`
  margin: 0 0 47px 38px;
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
`;

const ProductTextP = styled.p`
  height: 125px;
  margin: 0 0 0 38px;
  font-family: "Playfair Display", serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
`;

const ProductPriceBtn = styled.div`
  height: 103px;
  width: 327px;
  margin-top: 17px;
  position: relative;
`;

const ProductPriceBtnP = styled.p`
  display: inline-block;
  position: absolute;
  top: -13px;
  height: 50px;
  font-family: "Trocchi", serif;
  margin: 0 0 0 38px;
  font-size: 28px;
  font-weight: lighter;
  color: #474747;
`;

const Span = styled.span`
  display: inline-block;
  height: 50px;
  font-family: "Suranna", serif;
  font-size: 34px;
`;

const ProductPriceBtnButton = styled.button`
  float: right;
  display: inline-block;
  height: 50px;
  width: 176px;
  margin: 0 40px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
`;

const Card = () => (
  <Container>
    <Wrapper>
      <ProductImg>
       <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" height="350" width="350"/>   
      </ProductImg>  
      <ProductInfo>
        <ProductText>
            <ProductTextH1>Harvest Vase</ProductTextH1>
            <ProductTextH2>by studio and friends</ProductTextH2>
            <ProductTextP>Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects.</ProductTextP>
        </ProductText>
       <ProductPriceBtn>
        <ProductPriceBtnP><Span>78</Span>$</ProductPriceBtnP> 
        <ProductPriceBtnButton>Buy Now</ProductPriceBtnButton>
       </ProductPriceBtn>
      </ProductInfo>
    </Wrapper>
  </Container>
);

export default Card;
