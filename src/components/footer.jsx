import React from 'react'
import LinkContainer from '../containers/link-container'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/filters'

const Footer = () => (
  <p>
    Show:{' '}
    <LinkContainer filter={SHOW_ALL}>All</LinkContainer>{', '}
    <LinkContainer filter={SHOW_ACTIVE}>Active</LinkContainer>{', '}
    <LinkContainer filter={SHOW_COMPLETED}>Completed</LinkContainer>
  </p>
)

export default Footer
