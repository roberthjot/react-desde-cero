import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
        
            
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }
// this.setState({})

cambiarFecha() {
    this.setState({
        fecha: new Date()
    })
}

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form  id="elemento">
                <div className="ed-grid m-grid-2">
                
                    <div className="form__item">
                        <label htmlFor="">Nombre completo</label>
                        <input 
                        type="text" 
                        onChange={ this.cambiarNombre } 
                        />
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Correo Electrónico</label>
                        <input 
                        type="email" 
                        onChange={ this.cambiarCorreo }
                        />
                    </div>
                    </div>
               </form>
                
                <div>
                
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        
        let elemento = document.getElementById("elemento")
        
        this.intervarloFecha = setInterval(() => {
            this.cambiarFecha()
            console.log(new Date ())
        }, 1000)

    }

    componentDidUpdate(prevProps, prevState){
     //   console.log(prevProps)
//          console.log("----------")
        //console.log(prevState)
        
    }

    componentWillUnmount() {
        clearInterval(this.intervarloFecha)
    }

}

export default Formulario