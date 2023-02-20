import './CloseButton.scss'
import PropTypes from 'prop-types';
const CloseButton = ({onClick}) => {
  return(
  <div className='close-container'>
    <div className="close-btn" onClick= {onClick}>x</div>
  </div>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CloseButton;