import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import './cadastro.css';


type props = {
    tema: string}


export default class ProdutosServicos extends Component<props> {
    render() {
        let estilo = ``

        return (
            <>
                <div className="container">
                    <br></br>
                    <main>
                        <div className="leftwrapper">
                            <div className='col s12 m12 l6 estilo'>
                                <div className="box">
                                    <h5>Produtos</h5>
                                    <table className="responsive-table">
                                        <thead>
                                            <tr>
                                                <th>Produto</th>
                                                <th>Descrição</th>
                                                <th>Preço</th>
                                                <th></th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Aplicação de Botox</td>
                                                <td></td>
                                                <td>R$ 150,00</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Tratamento de Manchas na Pele</td>
                                            </tr>
                                            <tr>
                                                <td>Remoção de Rugas</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br></br>
                            <div className='col s12 m12 l6 estilo'>
                                <div className="box">
                                    <h5>Serviços</h5>
                                    <table className="responsive-table">
                                        <thead>
                                            <tr>
                                                <th>Serviço</th>
                                                <th>Descrição</th>
                                                <th>Preço</th>
                                                <th></th>
                                                <th>Editar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Corte de cabelos</td>
                                                <td>Masc / Fem</td>
                                                <td>R$ 45,00</td>
                                                <td><i className="material-icons right">mode_edit</i></td>
                                            </tr>
                                            <tr>
                                                <td>Manicure</td>
                                            </tr>
                                            <tr>
                                                <td>Pedicure</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </main>
                    <section>
                        <div className="rightWrapper">
                            <div className='col s12 m12 l4 estilo'>
                                <div className="box">
                                    <h5>Produtos e serviços mais consumidos</h5>
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
                            <br></br>
                            <div className='col s12 m12 l4 estilo'>
                                <div className="box">
                                    <h5>Produtos e serviços mais consumidos <strong>público masculino</strong></h5>
                               
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
                            <br></br>
                            <div className='col s12 m12 l4 estilo'>
                                <div className="box">
                                    <h5>Produtos e serviços mais consumidos <strong> público Feminino</strong></h5>
                                 
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