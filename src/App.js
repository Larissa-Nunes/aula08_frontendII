import { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    const lista = [
      {
        id: 0,
        imageUrl: 'https://blog.novasafra.com.br/wp-content/uploads/2018/03/chocolate_featured-780x450.jpg',
        nome: 'Chocolate'
      },
      {
        id: 1,
        imageUrl: 'https://www.saboravida.com.br/wp-content/uploads/2019/07/conheca-os-beneficios-da-culinaria-japonesa.jpg',
        nome: 'Comida japonesa'
      },
      {
        id: 2,
        imageUrl: 'https://www.fundecitrus.com.br/img/noticias/420-201705250905.jpg',
        nome: 'Suco de Laranja'
      },
    ]
    this.state = {
      listaDeCompras: lista,
      listaPadrao: lista
    };
  }

  resetaLista = () => {
    this.setState({
      listaDeCompras: this.state.listaPadrao
    })
  }

  removeCompra = (idCompra) => {
    const listaNova = this.state.listaDeCompras.filter(({ id }) => {
      return id !== idCompra
    });
    this.setState({
      listaDeCompras: listaNova
    });
  }
  render() {
    return (
      <>
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
          <button className="btn btn-primary" onClick={this.resetaLista}>Reseta</button>
          {
            this.state.listaDeCompras.map(({ id, imageUrl, nome }) => {
              return (
                <div key={id} onClick={() => this.removeCompra(id)}>
                  <ul>
                    <li><img src={imageUrl} alt={nome} /></li>
                    <li>{nome}</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}