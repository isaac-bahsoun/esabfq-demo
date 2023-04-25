import styled from "styled-components";


export const TopContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center; 
   background-image: url(../../images/image4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
   @media (max-width: 480px) {
    background-image:none;
  };
`;
export const StyleDiv = styled.form`
  display: flex;
  flex-direction : column;
  justify-content: space-between;
  @media (min-width: 480px) {
   display: flex;
  flex-direction : column;
  justify-content: space-between;
 };




`;

export const Label = styled.span`
 color:red;
 font-style: italic;
 
 `
export const Header = styled.h1`
  //color:#012E4A;
   color:#012E4A;
  text-align: center;
  text-transform: uppercase;

`;
export const SetMother = styled.div `
margin-right:2rem

`;
export const Header3 = styled.h3 `
color:#012E4A;
  text-align: center;

`;

export const WrapperDiv = styled.div`
  display : flex;
  flex-direction : column;
  width:30rem;
  justify-content: space-between;
  align-items: center;
  border : 1px solid transparent;
  padding : 3rem;
  margin:auto;
  background:#E8EDE7;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  @media (max-width: 480px) {
    display : flex;
    flex-direction : column;
    margin:2rem;
    margin-left:0;
    margin-top:0;
    margin-right:0;

   width: 100%;
   border: none;
   
 }

`;


export const ButtonNext = styled.button`
position: relative;
border: none;
width: 5rem;
height: 2rem;
color: #fff;
background : #036280;
cursor: pointer;

`;


export const ButtonBack = styled.button`
position: relative;
border: none;
width: 5rem;
height: 2rem;
color: black;
background : #9dc3d7;
cursor: pointer;
margin-right:2rem;

`;

export const ButtonSubmit = styled.button`

position: relative;
border: none;
width: 5rem;
height: 2rem;
color: #fff;
background : #036280;
cursor: pointer;


`;
export const Ddropdown = styled.select`
box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
width: 100%;
border-color: #ffe08a;
background-color: none;
border-color: #dbdbdb;
border-radius: 4px;
color: #363636;
border:none;
padding: 0.5rem;

  &:focus {
    &:focus {
      outline: none;
      border-color: red;
      box-shadow: 0 0 3px red;
      -moz-box-shadow: 0 0 3px red;
      -webkit-box-shadow: 0 0 3px blue;
     }
   };
   option[value=""] {
    display: none;

`;
export const Input = styled.input`
box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
    
    width: 100%;
    border-color: #ffe08a;
    background-color: none;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
    border:none;
    padding: 0.5rem;
  
      &:focus {
        outline: none;
      border-color: blue;
      box-shadow: 0 0 3px blue;
      -moz-box-shadow: 0 0 3px blue;
      -webkit-box-shadow: 0 0 3px blue;
       }
       @media (min-width: 480px) {
        box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
    
    width: 100%;
    border-color: #ffe08a;
    background-color: none;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
    border:none;
    padding: 0.5rem;
    &:focus {
      outline: none;
     }
      };
    

`;
export const SectionDiv = styled.div`

`;
export const DivButtons = styled.div`
display: flex;
flex-direction: row;
margin-top:1rem;
justify-content:flex-start;


`;
export const TitleD = styled.div`
  display: flex;
  flex-direction : row ;
  justify-content: space-between;

`;
export const SplitData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  

`;
export const Spared = styled.div`
  margin:1rem;

`;
export const MainDiv = styled.div`
 display: flex;
 flex-direction:column;
 justify-content: space-between;

`;
export const Header2 = styled.h2 `
color:#378BA4;

`;
export const InputN = styled.input`
box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
    
    width: 100%;
    border-color: #ffe08a;
    background-color: none;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
    border:none;
    padding: 0.5rem;
  
      &:focus {
        outline: none;
      border-color: blue;
      box-shadow: 0 0 3px blue;
      -moz-box-shadow: 0 0 3px blue;
      -webkit-box-shadow: 0 0 3px blue;
       }
       @media (min-width: 480px) {
        box-shadow: inset 0 0.0625em 0.125em rgba(10,10,10,.05);
    
    width: 100%;
    border-color: #ffe08a;
    background-color: none;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
    border:none;
    padding: 0.5rem;
    &:focus {
      outline: none;
     }
      };
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`;

