import React from 'react'

const Card = ({nombre, apellido, edad}) => {

return (
  <div>
      <h3>
        El Pokémon creado fue {nombre} {apellido} y tiene {edad} años de edad.
      </h3>
  </div>
)
}

export default Card;