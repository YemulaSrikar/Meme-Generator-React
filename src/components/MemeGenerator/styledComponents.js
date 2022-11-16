// Style your components here
import styled from 'styled-components'

export const FormMainCont = styled.div`
  @media screen and (min-width: 577px) {
    display: flex;
    justify-content: space-between;
  }
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`
export const FormContainer = styled.form`
  padding: 10px;
  @media screen and (min-width: 577px) {
    order: 0;
    margin-right: 40px;
  }
`
export const CustomLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  height: 30px;
  width: 100%;
  outline: none;
  margin-top: 13px;
  margin-bottom: 13px;
`
export const CustomSelect = styled.select`
  height: 30px;
  width: 100%;
  outline: none;
  margin-top: 15px;
  margin-bottom: 13x;
`
export const CustomButton = styled.button`
  height: 30px;
  width: 50%;
  border-width: 0px;
  background-color: #0070c1;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
`
export const BackgroundImage = styled.div`
  background-image: url(${props => props.bgImage});
  height: 300px;
  width: 320px;
  background-size: cover;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media screen and (min-width: 577px) {
    order: 1;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: ${props => props.fontSize}px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
  color: #35469c;
  text-align: center;
`
