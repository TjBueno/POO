/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './cadastro.css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <> 
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
                                                <td>Lucas Braz</td>
                                                <td>lucas.b@gmail.com</td>
                                                <td>12 2345-6789</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Gabriel Bicho Nnes</td>
                                                <td>gabriel.nunes@gmail.com</td>
                                                <td>12 3456-7890</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Lucas Ferreira</td>
                                                <td>lucas.ferreira@gmail.com</td>
                                                <td>12 3456-8901</td>
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
                                                <td>Priscila Silva</td>
                                                <td>pri_silva@gmail.com</td>
                                                <td>12 5678-9012</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Tais Gomes Salomão</td>
                                                <td>tais_salomao@hotmail.com</td>
                                                <td>12 56789-0123</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Elen Petri</td>
                                                <td>elen_petri@gmail.com</td>
                                                <td>12 7890-1234</td>
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
                                <h5>Top 10 que mais consumiram</h5>
                                <h6>por quantidade</h6>
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
                                    <h5>Top 10 que menos consumiram</h5>
                                    <h6>por quantidade</h6>
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
                                    <h5>Top 10 que mais consumiram</h5>
                                    <h6>por valor</h6>
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
}