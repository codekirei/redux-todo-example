import React, { PropTypes as types } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) return <span>{children}</span>
  return (
    <a href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: types.bool.isRequired,
  children: types.node.isRequired,
  onClick: types.func.isRequired,
}
export default Link
