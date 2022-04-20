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

  consultarApiNoticias  = async ()  =>  {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9b441a96036442090555e3cf957784c`;
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
          <Formulario/>
          <ListaNoticias
          noticias={this.state.noticias}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
