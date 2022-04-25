import React, {Component} from 'react';
import PropTypes from "prop-types";

class Formulario extends Component {
  state = {
      categoria:    'general'
  }

  cambiarCategoria  =   e   =>  {
      this.setState({
          categoria:    e.target.value
      },    ()  =>  {
          //Pasar a la pagina principal
          this.props.consultarApiNoticias(this.state.categoria);
      }
      );
  }
  render(){
    return(
            <div    className='card-body'>
                <form>
                    <h2>Categoría</h2>
                    <div    className='form-group'>
                        <select className='form-select' onChange={this.cambiarCategoria}>
                            <option value="general">General</option>
                            <option value="business">Negocios</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="health">Salud</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deportes</option>
                            <option value="technology">Tecnología</option>
                        </select>
                    </div>
                </form>
            </div>
    );

}
}

Formulario.propTypes    =   {
    consultarApiNoticias: PropTypes.func.isRequired
}

export default Formulario;