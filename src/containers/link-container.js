import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Link from '../components/link.jsx'

const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter,
})

const mapDispatchToProps = (dispatch, props) => ({
  clickHandler: () => dispatch(setFilter(props.filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
