import PropTypes from 'prop-types'

function Card({children}) {
  return (
    <div className="card">{children}</div>
  )
}
Card.defaultProps = {
    reverse: false
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card