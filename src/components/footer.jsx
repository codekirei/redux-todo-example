import React from 'react'
import FilterLink from '../containers/filter-link'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/filters'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

export default Footer
