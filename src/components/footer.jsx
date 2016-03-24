import React from 'react'
import LinkContainer from '../containers/link-container'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/filters'
import { join } from '../utils'

const Footer = () => {
  const filterText = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed',
  }

  const filters = Object.keys(filterText).map((filter, key) => (
    <LinkContainer filter={filter} key={key}>
      { filterText[filter] }
    </LinkContainer>
  ))

  return (
    <p>
      Show:{' '}{ join(filters, ', ') }
    </p>
  )
}

export default Footer
