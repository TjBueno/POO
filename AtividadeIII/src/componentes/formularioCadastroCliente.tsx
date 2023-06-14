import { Component } from "react";
import './cadastro.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type props = {
    tema: string
}



export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        //const navigate = useNavigate();
        let estiloBotao = `btn waves-effect waves-light botao_cadastrar botao ${this.props.tema}`
        return (
            <>
                <br />
                <br />
                <div className="row box">
                    <h4 className="tes">Cadastro de Cliente</h4>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix " type="text" className="validate" />
                                    <label htmlFor="icon_prefix">Nome Completo</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_telephone" type="tel" className="validate" required/>
                                    <label htmlFor="icon_telephone">Nome Social</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_telephone" type="tel" className="validate"  required/>
                                    <label htmlFor="icon_telephone">CPF</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">date_range</i>
                                    <input id="icon_telephone" type="date" className="validate" required/>
                                    <label htmlFor="icon_telephone">Data Emissão</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_box</i>
                                    <input type="text" className="validate" />
                                    <label htmlFor="email">RG</label>
                                </div>
{/*                                 <div className="row">
                                    <div className="input-field col s12">
                                        <label>Possui mais de um RG?</label>
                                        <select>
                                            <option value="1">Sim</option>
                                            <option value="2">Não</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_box</i>
                                    <input type="text" className="validate" />
                                    <label htmlFor="email">RG_2</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_box</i>
                                    <input type="text" className="validate" />
                                    <label htmlFor="email">RG_3</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="telefone" type="text" className="validate" />
                                    <label htmlFor="telefone">Telefone</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <div className="botao2">
                                    <div className="row">
                                        <div className="col s6">
                                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                                <i className="material-icons right">send</i> 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>                       
                </div>
            <br />
            <div className="row box">
                    <form className="col s12">
                        <h4>Cadastro de Produtos / Serviços</h4>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">control_point</i>
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">filter_9_plus</i>
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">quantidade</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">attach_money</i>
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Preço</label>
                            </div>
                        </div>
                        <div className="botoes">
                            <div className="row">
                                <div className="col s12">
                                    <button className={estiloBotao} type="submit" name="action">Cadastrar
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </>
        )
    }
}