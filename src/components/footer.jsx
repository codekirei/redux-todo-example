import React from 'react'
import LinkContainer from '../containers/link-container'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../constants/filter-constants'
import { join } from '../utils'
import { v4 as uuid } from 'node-uuid'

const Footer = () => {
  const filters = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed',
  }

  const filterNodes = Object.keys(filters).map(filter => (
    <LinkContainer filter={filter} key={uuid()}>
      { filters[filter] }
    </LinkContainer>
  ))

  return (
    <p>
      Show:{' '}{ join(filterNodes, ', ') }
    </p>
  )
}

export default Footer
