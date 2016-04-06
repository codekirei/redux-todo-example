import React from 'react'
import { v4 as uuid } from 'node-uuid'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../constants/filter-constants'
import join from '../../utils/join'
import Link from '../connected/link'

const filters = [
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

const Footer = () => <p>Show:{' '}{ join(links, ', ') }</p>

export default Footer
