import React, { Component } from 'react';

/** 
class App extends React.Component {
  
  state = {
    nome : ''
  }
  
  modificarNome = (event) => {
    this.setState({
      nome : event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render() {
    return(
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1> Hello {this.state.nome} ! </h1>
        { this.criaComboBox() }
      </>
    )
  }
}

export default App;
*/

function App(props) {

  //Não possui state

  const modificarNome = (event) => {
    console.log(event.target.value)
  }

  //A função deve ser uma constante 
  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  //Não existe componentDidMount

  //Não existe metodo render
  return(
    <>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1> Hello {props.nome} ! </h1>
      { criaComboBox() }
    </>
  )

}
export default App;