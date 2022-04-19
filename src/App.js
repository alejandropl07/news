import React, {Component} from 'react';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarApiNoticias();
  }

  consultarApiNoticias  = async ()  =>  {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=b9b441a96036442090555e3cf957784c`;
    const respuesta = await fetch(url);
    const noticias  = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
  }

  render(){
    return(
      <h1>API Noticias</h1>
    );
  }
}

export default App;
