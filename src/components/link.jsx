import React, { PropTypes as types } from 'react'

const Link = ({ active, clickHandler, text }) => {
  if (active) return <span>{text}</span>

  const onClick = e => {
    e.preventDefault()
    clickHandler()
  }

  return (
    <a href="#" onClick={onClick}>
      {text}
    </a>
  )
}

Link.propTypes = {
  active: types.bool.isRequired,
  clickHandler: types.func.isRequired,
  text: types.string.isRequired,
}

export default Link
