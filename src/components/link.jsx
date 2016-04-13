import React, { PropTypes as types } from 'react'

const Link = ({ active, clickHandler, text }) =>
  active
    ? <span>{text}</span>
    : <a href="#" onClick={clickHandler}>{text}</a>

Link.propTypes = {
  active: types.bool.isRequired,
  clickHandler: types.func.isRequired,
  text: types.string.isRequired,
}

export default Link
