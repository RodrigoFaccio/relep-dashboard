import { useEffect, useState } from 'react';
import imgStatus from '../../assets/Ellipse 35.svg'

import * as Styled from './styles';
import axios from 'axios';

interface TableProps{
  data: any;
  onClick: (user:any) => void;
}

const Row = ({ data, onClick }: TableProps) => {
  console.log(data)
  
  
  return (
      <Styled.TableRow onClick={onClick} ativo={data.active}>
          <td>
             {data.active?'Ativado':'Desativado'}
          </td>
        <td>
           {data.name}
        </td>
        <td>
            {data.phone}
        </td>
        <td>
            {data?.app.location.city}
        </td>
        <td>
            <img src={data.app.logoUrl} alt="" />
        </td>
        <td>
           {data.app.gains.weptec}
        </td><td>
        {data.app.gains.licensed}

        </td><td>
        {data.app.gains.total}
           
        </td>
      
    </Styled.TableRow>
  );
};

export default Row;
