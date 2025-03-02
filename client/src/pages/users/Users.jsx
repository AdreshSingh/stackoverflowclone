import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import PropTypes from 'prop-types';

import UserList from "./UserList";

import './Users.css';

function Users({ slideIn }) {

    return (
        <div className="home-container-1">
            <LeftSidebar slideIn={slideIn} />
            <div style={{ marginTop: "30px" }} className="home-container-2">
                <h1 style={{ fontWeight: 400 }}>Users</h1>
                <UserList />
            </div>
        </div>
    )
}
export default Users;


Users.propTypes = {
    slideIn: PropTypes.bool.isRequired,
};