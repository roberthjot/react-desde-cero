import React from 'react'
import PropTypes from 'prop-types'


const Curso = ({title, image, price, profesor}) => (
    <article className="card">
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
    <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">    
        <h3 className="center">{title}</h3>
    <div className="s-main-center">
        {profesor}
      </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="ttps://ed.team">{ `$ ${price} USD`} </a>

      
    </div>
  </div>
</article>


)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontró título",
  image: "https://i.pinimg.com/736x/6e/52/1b/6e521b489eab53c383448c97f3c9b029--php.jpg",
  price: "__",
  profesor: ""

}

export default Curso