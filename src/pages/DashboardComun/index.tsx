import * as Styled from './styles'
import backIcon from '../../assets/sign-out 1.svg'
import filter from '../../assets/controles-deslizantes-de-configuracoes 1.svg'
import Row from '../../components/Row'
import { Pagination } from '@mui/material'
import Aside from '../../components/Aside'
import { ChangeEvent, useEffect, useState } from 'react'
import {api} from '../../api'
import RowUsers from '../../components/RowUsers'
import { AnyAaaaRecord } from 'dns'

const DashboardComun = () => {
    const [selected, setSelected] = useState<any>(null)
    const [users, setUsers] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    const [reload, setReload] = useState(false);
    const [menuSelected, setMenuSelected] = useState(1);
    const [total, setTotal] = useState(0);
    const [totalLi, setTotalLi] = useState(0);
    const [totalPassageiro, setTotalPassageiro] = useState(0);
    const [totalMotorista, setTotalMotorista] = useState(0);

    const [searchName, setSearchName] = useState('');


    const [dash, setDash] = useState<any>();





    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    const getGains = async () => {
        const {data} = await api.get('/admin/statistics')
        setDash(data)
    };
   
    function dividePor10eArredonda(valor:number) {
        const resultado = Math.ceil(valor / 10);
        setMaxPage(resultado)
        return resultado;
    }
      
    function pesquisaPorNome( name:string) {
        setSearchName(name)
        
    }
      const getLicenciados = async ()=>{
        if(menuSelected===1){
            const response  = await api.get(`/admin/detailed/licenseds?limit=10&name=${searchName}`);
            console.log(response)
        setUsers(response.data.content)
        dividePor10eArredonda(response.data.total)
        setTotal(response.data.total)
        const result = sumFields(response.data.content);
           
        setTotalLi(response.data.total)
        }else{
            const response  = await api.get(`/admin/detailed/licenseds?page=${page}&name=${searchName}`);
            setUsers(response.data.content)
            dividePor10eArredonda(response.data.total)
            setTotal(response.data.total)
            const result = sumFields(response.data.content);
            setTotalLi(response.data.total)
        }

      }
      const getPassageiros = async ()=>{
        if(menuSelected===1){
            const response  = await api.get(`/admin/detailed/passengers?limit=10&name=${searchName}`);
        setUsers(response.data.content)
        dividePor10eArredonda(response.data.total)
        setTotal(response.data.total)
        setTotalPassageiro(response.data.total)

        }else{
            const response  = await api.get(`/admin/detailed/passengers?page=${page}&name=${searchName}`);
            setUsers(response.data.content)
            dividePor10eArredonda(response.data.total)
            setTotal(response.data.total)
            setTotalPassageiro(response.data.total)
        }
        


      }
      const getMotoristas = async ()=>{
        if(menuSelected===1){
            const response  = await api.get(`/admin/detailed/drivers?limit=10&name=${searchName}`);
            setUsers(response.data.content)
            dividePor10eArredonda(response.data.total)
            setTotal(response.data.total)
            setTotalMotorista(response.data.total)
        }else{
            const response  = await api.get(`/admin/detailed/drivers?page=${page}&name=${searchName}`);
            setUsers(response.data.content)
            dividePor10eArredonda(response.data.total)
            setTotal(response.data.total)
            setTotalMotorista(response.data.total)
           
        }
      


      }

            useEffect(() => {
                if(menuSelected===1){
                   getLicenciados()
                   getPassageiros()
                   getMotoristas();
                   getGains()
                }else if(menuSelected===2){
                    getLicenciados()                
                }else if(menuSelected===3){
                    getMotoristas()
                }else if(menuSelected===4){
                    getPassageiros()
                }
                
                
                
              
            }, [page,reload,searchName]);
            function sumFields(datas:any) {
                let weptecSum = 0;
                let licensedSum = 0;
                let totalSum = 0;
                let canceledTrips = 0;
                let finishedTrips = 0;
              
                datas.forEach((item:any) => {
                  weptecSum += parseFloat(item.app.gains.weptec.replace(/[^\d.,-]/g, '').replace(',', '.'));
                  licensedSum += parseFloat(item.app.gains.licensed.replace(/[^\d.,-]/g, '').replace(',', '.'));
                  totalSum += parseFloat(item.app.gains.total.replace(/[^\d.,-]/g, '').replace(',', '.'));
                  canceledTrips += item.app.trips.canceled;
                  finishedTrips += item.app.trips.finished;
                });
              
                const formattedWeptec = weptecSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                const formattedLicensed = licensedSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                const formattedTotal = totalSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
              
                return { weptec: formattedWeptec, licensed: formattedLicensed, total: formattedTotal, canceledTrips, finishedTrips };
              }
              
              
                 
          const handleSelect = (user:any)=>{
          
                setSelected(user)
                
          }
          const handleSelectMenu = async(n:number)=>{
            if(n===1){
                
                setMenuSelected(n)
                setSelected(null)
            }else  if(n===2){
                await getLicenciados()
                setMenuSelected(n)
                setSelected(null)

            }else if(n===3){
                await getMotoristas()
                setSelected(null)


                setMenuSelected(n)

            }else if(n===4){
                await getPassageiros()
                setMenuSelected(n)
                setSelected(null)



            }else{
                setMenuSelected(n)
                setSelected(null)


            }
          
            
      }
      
    return (
        <Styled.Container>
            <Styled.Header>
               <div>
                <img src={ backIcon} alt='voltar'  />
                {
                    menuSelected ===1 && <h2>
                        Dashboard
                    </h2>
                   

                   }
                   {
                    menuSelected ===2 && <h2>
                        Licenciados
                    </h2>
                   

                   }
                   {
                    menuSelected ===3 && <h2>
                        Motoristas
                    </h2>
                   

                   }
                   {
                    menuSelected ===4 && <h2>Passageiros</h2>
                   

                   }
                    <img src={ filter} alt='filtrar' />

               </div>
                <Styled.Menu selected={menuSelected}>
                    <p onClick={()=>handleSelectMenu(1)}>Dashboard</p>

                    <p onClick={()=>handleSelectMenu(2)}>Licenciados</p>
                    <p onClick={()=>handleSelectMenu(3)}>Motoristas</p>
                    <p onClick={()=>handleSelectMenu(4)}>Passageiro</p>


                </Styled.Menu>
                
            </Styled.Header>
            {
                menuSelected >=2 ?(
                    <>
                    <Styled.SearchDiv>
                <Styled.SearchInput placeholder='Pesquisar' onChange={(e)=>pesquisaPorNome(e.target.value)}/>

            </Styled.SearchDiv>
            <Styled.TableAside>
                  <Styled.Table>
                <thead>
                    {
                        menuSelected ===2?(
                           <>
                            <th>Status</th>
                            <th>Nome</th>
                            <th>Domínio</th>

                             <th>Numero</th>
                            <th>Cidade</th>
                            <th>Logo</th>
                            <th>WepTec</th>    
                            <th>Saldo</th> 
                            <th>Total</th>   
                           </> 
                        ):(
                            <>
                            <th>Status</th>
                            <th>Nome</th>
                            <th>Domínio</th>

                             <th>Numero</th>
                            <th>Email</th>
                            <th>Logo</th>
                            
                            </>
                        )
                    }


                  
                </thead>
                    <tbody>
                       {
                        users.length>0 && 
                            users?.slice(0,10).map((user:any)=> {
                                if(menuSelected===2){
                                    
                                    return (
                                         <Row onClick={()=>handleSelect(user)} data={user}/>
         
                                     )
                                }else{
                                    return (
                                         <RowUsers onClick={()=>handleSelect(user)} data={user}/>
         
                                     )
                                }
                            })
                            
                       }

                    </tbody>
                </Styled.Table>
            {
                selected && <Aside data={selected}/>
            }
              
            </Styled.TableAside>
            
            <Styled.DivPagination>
            <Pagination count={maxPage} onChange={handleChange} variant="outlined" shape="rounded"/>
            <h3>
            
                   <p>Total:{total}</p>
                   

            </h3>

            </Styled.DivPagination>
                    </>
                ):(
                    <>
                        <Styled.ContainerDash>
                           <div>
                                <Styled.Card>
                                    <p>Faturamento Total</p>
                                    <p>{dash?.gains.total}</p>

                                        
                                </Styled.Card>
                                <Styled.Card>
                                    <p>Faturamento Licenciado</p>
                                    <p> {dash?.gains.licensed}</p>

                                        
                                </Styled.Card>
                                <Styled.Card>
                                    <p>Faturamento Weptek</p>
                                    <p> {dash?.gains.weptec}</p>

                                        
                                </Styled.Card>
                               
                           </div>
                           <div>
                                <Styled.Card>
                                    <p>Viagens finalizadas</p>
                                    <p>{dash?.trips.finished}</p>

                                        
                                </Styled.Card>
                                <Styled.Card>
                                    <p>Viagens canceladas</p>
                                    <p>{dash?.trips.canceled}</p>


                                        
                                </Styled.Card>
                                <Styled.Card>
                                    <p>Viagens em andamento</p>
                                    <p>{dash?.trips.running}</p>


                                        
                                </Styled.Card>
                                
                               
                           </div>
                           <div>
                                <Styled.Card>
                                    <p>Licenciados</p>
                                    <p>{totalLi}</p>

                                        
                                </Styled.Card>
                                <Styled.Card>
                                    <p>Passageiros</p>
                                    <p>{dash?.passengers}</p>

                                        
                                </Styled.Card>
                                <Styled.Card>
                                    <p>Motoristas</p>
                                    <p>{dash?.drivers}</p>

                                        
                                </Styled.Card>
                               
                           </div>
                        </Styled.ContainerDash>
                    
                    </>
                )
            }
        </Styled.Container>
    )
}
export default DashboardComun;