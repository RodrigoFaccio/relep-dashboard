import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
overflow-y:hidden;
  
`;
export const Header = styled.div`
display: flex;
width: 100%;
flex-direction: column;

 
  img{
    width: 1.875rem;
    height: 1.875rem;
  }
  div{
   &:nth-child(1){
    display: flex;
    justify-content:space-around;
    width: 100%;
   }
  }
  h2{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
border-bottom:1px solid #000000;

color: #000000;
    }
    
`;
export const SearchDiv
 = styled.div`
display: flex;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

 
`;
export const SearchInput
 = styled.input`
display: flex;
width: 20%;
height: 20px;
background: #e7e4e4;
border-radius: 8px;
font-family:'Comfortaa';
border: 0;
padding:10px;
font-size: 18px;
&:focus-visible{
  border: 0;
  outline: 1px solid #ddd;
}

 
`;
export const Table = styled.table`
  width: 100%;
  transition: 0.2s;
  text-align: left;
   border-collapse: collapse;
   margin-top:70px;
  font-family:'Comfortaa';
  border-radius:8px;
  max-height:48px;




  thead tr {
  padding: 10px;

    border-radius: 5px;

    
  }
  tbody tr {
    text-align: left;
  }
`; 
export const DivPagination = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  height: auto;
  
`;
export const TableAside = styled.div`
  display: flex;
  width: 100%;

`;

export const Menu =styled.div<{selected:number}>`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
p{ 
   font-family:'Comfortaa';
font-size:16px;
cursor: pointer;
&:nth-child(${props=>props.selected}){
  color:blue;
}



}
`

export const ContainerDash = styled.div`
 width: 80%;
 display: flex;
 flex-direction:column;
 div{
  display: flex;
  justify-content: space-around;
  margin-top:20px
 }

`
export const Card = styled.div`
display: flex;
  justify-content: center;
align-items: center;
padding: 21px 27px;
gap: 10px;

width: 280px;
height: 150px;

background: #D2D2D2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
flex-direction:column;
p{
  font-family: 'Comfortaa';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 22px;
text-align: center;

color: #000000;

    &:first-child{
      font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;

  color: #000000;

  }
}

`
