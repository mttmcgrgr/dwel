
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { createAccount } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  createAccount: user => dispatch(createAccount(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
