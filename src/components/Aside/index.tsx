import { useEffect, useState } from 'react';
import * as Styled from './styles'
import axios from 'axios';
import { api } from '../../api';
import { consumers } from 'stream';
interface AsideProps {
    data: any;
}
const Aside = ({data}:AsideProps) => {
    console.log(data)
    const [user,setUser] = useState<any>([])
    useEffect(() => {
      const getLicensed = async ()=>{
        const response = await api.get(`/admin/licenseds/${data.id}`)
        console.log(response)
        setUser(response.data)
      }
      getLicensed()
        
    
    }, [data.userId]);
    useEffect(() => {
        const getMotorista = async ()=>{
          const response = await api.get(`/apps/${data.app.id}/drivers/${data.id}`)
          console.log(response)
          setUser(response.data)
        }
        getMotorista()
          
      
      }, [data.userId]);
      useEffect(() => {
        const getLicensed = async ()=>{
          const response = await api.get(`/apps/${data.app.id}/passengers/${data.id}`)
          console.log(response)
          setUser(response.data)
        }
        getLicensed()
          
      
      }, [data.userId]);

   
    
    return (
        <Styled.Container>
            <Styled.DivTitle>
                <Styled.Title>
                    Dados Licenciado
                </Styled.Title>

               
            </Styled.DivTitle>
            <Styled.DivData>
               <div>
                    <label>
                        Nome
                    </label>
                    <p>
                       {user?.name}
                    </p>
                </div>
                {
                    data.app.domain &&(
                        <div>
                    <label>
                        Domínio
                    </label>
                   <p>
                   <a href={'weptek.app/'+data.app.domain}>weptek.app/{ data.app.domain}</a>
                   </p>
                </div>
                    )
                }


                    
            </Styled.DivData>
            <Styled.DivData>
               <div>
                    <label>
                        WhatsApp
                    </label>
                    <p>
                       {user?.phone}
                    </p>
                </div>
               <div>
                    <label>
                       APP
                    </label>
                    <p>
                       {data?.app.id}
                    </p>
               </div>


                    
            </Styled.DivData>
            {
                user.pix &&(
                    <Styled.DivData>
               <div>
                    <label>
                        Pix
                    </label>
                    <p>
                       {user?.pix}
                    </p>
                </div>
                                
            </Styled.DivData>
                )
            }
            <Styled.DivData>
               <div>
                    <label>
                        Email
                    </label>
                    <p>
                    {user?.email}
                    </p>
                </div>
               
                                
            </Styled.DivData>
            <Styled.DivData>
               <div>
                    <label>
                       Bloquear
                    </label>
                    <p>
                    <a href='*'>
                  Bloquear
                    </a>
                    </p>
                </div>
               <div>
                    <label>
                        Excluir
                    </label>
                    <p>
                    <a href='*'>
                      Excluir
                    </a>
                    </p>
               </div>                    
            </Styled.DivData>
                

        </Styled.Container>
    )
}

export default Aside;