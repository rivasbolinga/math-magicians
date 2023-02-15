import './input.css';
import PropTypes from 'prop-types';
const Input = ( { first, result } ) => {
  return (
  <div className="display-screen">
    <div className = 'result'>
      {result}
    </div>
    <div className = 'first'>
    {first}
    </div>
  </div>
  )

}
export default Input;