import { useEffect, useState } from 'react';
import imgStatus from '../../assets/Ellipse 35.svg'

import * as Styled from './styles';
import axios from 'axios';

interface TableProps{
  data: any;
  onClick: (user:any) => void;
}

const RowUsers = ({ data, onClick }: TableProps) => {
  const [dataApp, setDataApp] = useState<any>()
  
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
            {data.email}
        </td>
       
        <td>
            <img src={data.app.logoUrl} alt="" />
        </td>
        
       
    </Styled.TableRow>
  );
};

export default RowUsers;
