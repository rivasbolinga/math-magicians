import './buttons.css';
import PropTypes from 'prop-types';
const Button = ({ name, handleClick }) => {
  return (
    <div
    onClick = {() => handleClick(name)}
    className='button'>{name}</div>
  )
}

export default Button;