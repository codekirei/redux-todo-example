import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Link from '../components/link.jsx'

export default connect(
  (state, props) => ({
    active: props.filter === state.filter,
  }),
  (dispatch, props) => ({
    clickHandler: () => dispatch(setFilter(props.filter)),
  })
)(Link)
