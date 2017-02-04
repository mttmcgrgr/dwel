
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
