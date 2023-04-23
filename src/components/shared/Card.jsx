import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#fff" : "rgba(0, 0, 0, 0.4)",
        color: reverse ? "#000" : "#fff",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
    reverse: true,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool 
}

export default Card;
