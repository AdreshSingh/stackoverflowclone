import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



import './Users.css';

function User({ user }) {

    return (
        <Link to={`/Users/${user?._id}`} className='user-profile-link'>
            <h3>{user.name.charAt(0).toUpperCase()}</h3>
            <h5>{user.name}</h5>
        </Link>
    )
}
export default User;


User.propTypes = {
    user: PropTypes.object.isRequired,
};