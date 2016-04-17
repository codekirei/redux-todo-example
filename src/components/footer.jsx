import React from 'react'
import { v4 as uuid } from 'node-uuid'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../constants/filter-constants'
import intersperse from '../utils/intersperse'
import Link from '../connected-components/connected-link'

export const separator = ', '

export const filters = [
  {
    filter: SHOW_ALL,
    text: 'All',
  },
  {
    filter: SHOW_ACTIVE,
    text: 'Active',
  },
  {
    filter: SHOW_COMPLETED,
    text: 'Completed',
  },
]

const links = filters.map(({ filter, text }) => (
  <Link
    filter={filter}
    text={text}
    key={uuid()}
  />
))

const Footer = () => <p>Show:{' '}{ intersperse(links, separator) }</p>

export default Footer
