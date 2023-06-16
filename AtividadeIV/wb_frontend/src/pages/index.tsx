import 'materialize-css/dist/css/materialize.min.css'
import '../styles/cadastro.css'
import  Navbar  from '../components/nav';


type props = {
    tema: string
}

function Clientes (){
        return (
            <> 

                <Navbar/>
                <div className="container">
                    <br />
                    <br />
                    <main>
                        <div className="leftWrapper">
                            <br />
                            <div className='col s12 m12 l6 estilo'>
                                <div className="box">
                                    <h5>Masculino</h5>
                                    <table className="responsive-table highlight">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>E-mail</th>
                                                <th>Telefone</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Adriano Araujo</td>
                                                <td>dri_araujo@gmail.com</td>
                                                <td>12 99526-1954</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>André Victor</td>
                                                <td>andrezin@gmail.com</td>
                                                <td>12 98291-4556</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Lucca Maciel</td>
                                                <td>luquinha326@gmail.com</td>
                                                <td>12 398242-8245</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <div className='col s12 m12 l6 estilo'>
                                <div className="box">
                                    <h5>Feminino</h5>
                                    <table className="responsive-table highlight">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>E-mail</th>
                                                <th>Telefone</th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Marina Angela</td>
                                                <td>marinaangela864@gmail.com</td>
                                                <td>12 98294-4547</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Adrianne Araujo</td>
                                                <td>adriannearaujomaciel@hotmail.com</td>
                                                <td>12 98242-8245</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Marilia Araujo</td>
                                                <td>mariliaaraujomaciel@gmail.com</td>
                                                <td>12 99746-1941</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br />
                    </main>
                    
                    <section>
                        <br />
                        <div className='col s12 m12 l4 estilo'>
                            <div className="box">
                                <h5>Top 10 que mais consumiram <strong>por quantidade </strong></h5>
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />
                        <div>
                            <div className='col s12 m12 l4 estilo'>
                                <div className="box">
                                    <h5>Top 10 que menos consumiram <strong>por quantidade</strong></h5>
                                    
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <div className='col s12 m12 l4 estilo'>
                                <div className="box">
                                    <h5>Top 10 que mais consumiram <strong>por valor</strong> </h5>
                                    
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </>
        )
    }


export default Clientes;