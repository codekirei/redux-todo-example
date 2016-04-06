import React from 'react'
import { v4 as uuid } from 'node-uuid'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/filter-constants'
import join from '../../utils/join'
import Link from '../connected/link'

const Footer = () => {
  const filters = {
    [SHOW_ALL]: 'All',
    [SHOW_ACTIVE]: 'Active',
    [SHOW_COMPLETED]: 'Completed',
  }

  const filterNodes = Object.keys(filters).map(filter => (
    <Link
      filter={filter}
      key={uuid()}
      text={filters[filter]}
    />
  ))

  return <p>Show:{' '}{ join(filterNodes, ', ') }</p>
}

export default Footer
