import styled from 'styled-components';

export const Container = styled.div`
   margin-top:88px;
   margin-left:20px;

  width: 400px;
  min-height:80%;
  border: 1px solid #DDDDDD;
  border-radius:8px;
  display: flex;
  flex-direction:column
`;

export const DivTitle = styled.div`
  background: rgba(148, 75, 187, 0.24);
  border-radius: 8px 8px 0px 0px;
  height: 48px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;


export const Title = styled.p`
  font-family: 'Comfortaa';
font-style: normal;
font-weight: 700;
font-size: 18px;
`;

export const List = styled.div`
  border-bottom:1px solid #D2D2D2;
  padding-left: 10px;
  padding-top: 10px;

`;
export const Label = styled.label`
  font-weight:800;
  font-family: 'Comfortaa';
`;
export const Text = styled.p`
  font-family: 'Comfortaa';
  font-weight:400;

`;
export const DivData = styled.div`
    width: 92%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:10px;
    border-bottom:1px solid #D2D2D2;
    align-items: center;
    height: 100%;
   
    div{
      max-width: 100%;
      p{
         font-family: 'Comfortaa';
          font-weight:500;
          font-size:12px;
         &:first-child{
           width: 200px;
         }
      }
      label{
        font-family: 'Comfortaa';
          font-weight:600;
          font-size: 14px;
      }
    }

`;

