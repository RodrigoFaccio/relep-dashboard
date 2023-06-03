import styled from 'styled-components';

export const TableRow = styled.tr<{ativo:boolean}>`
  transition: 0.2s;
  height: 40px;
  width: 90%;
  cursor: pointer;
  &:nth-child(even) {
    background-color: #ffff;

    color: #000000;
    &:hover {
      background: rgba(148, 75, 187, 0.24);
    }
  }
  &:is(:hover, :has(input:focus-visible)) {
    background: rgba(148, 75, 187, 0.24);
  }
  &:nth-child(odd) {
    background-color: #f3f3f3;

    color: #000000;
    &:hover {
         background: rgba(148, 75, 187, 0.24);

    }
  }

  td {
    height: 3rem;
    padding: 0px;
    &:first-child{
        padding-left: 10px;
        color:${props=>props.ativo?'#22F100':'red'}
        
    }
   
   
  }
  img{
    width: 30px;
    height: 30px;
    border-radius:50%;
  }
`;

export const Radio = styled.input`
  appearance: none;
  position: absolute;
  height: 20px;
  width: 20px;
  border: 1px solid #808080;
  border-radius: 999px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: transparent;
  opacity: 0;

  &:before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    background: transparent;
    border-radius: 999px;
    transition: 0.2s;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(36, 160, 237, 0.5);
  }

  &:checked {
    border-color: #24a0ed;

    &::before {
      background: #24a0ed;
    }
  }
`;

export const DivSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
`;
