import React, {Component, Fragment} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarApiNoticias();
  }

  consultarApiNoticias  = async (categoria='general')  =>  {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=b9b441a96036442090555e3cf957784c`;
    const respuesta = await fetch(url);
    const noticias  = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  }

  render(){
    return(
      <Fragment>
        <Header
        titulo= 'USA News'/>

        <div  className='container  white contenedor-noticias'>
          <Formulario
          consultarApiNoticias = {this.consultarApiNoticias}
          />
          <ListaNoticias
          noticias={this.state.noticias}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
