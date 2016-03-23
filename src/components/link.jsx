import React, { PropTypes as types } from 'react'

const Link = ({ active, children, clickHandler }) => {
  if (active) return <span>{children}</span>

  const onClick = e => {
    e.preventDefault()
    clickHandler()
  }

  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  )
}

Link.propTypes = {
  active: types.bool.isRequired,
  children: types.node.isRequired,
  clickHandler: types.func.isRequired,
}

export default Link
