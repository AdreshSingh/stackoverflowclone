import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import { Avatar } from "../../components/avatar/Avatar";

import './UserProfile.css';

import { useParams } from "react-router-dom";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";


function UserProfile({ slideIn }) {
    const { id } = useParams();

    const [userSwitch, setUserSwitch] = useState(false)

    const users = [
        {
            "_id": "u12345",
            "name": "Jhon Doe",
            "email": "jhon@example.com",
            "password": "securepassword123",
            "about": "software developer with a passion for open source projects and algorithms.",
            "tags": ["JavaScript", "Python", "Open-source"],
            "answered": 10,
            "joinedon": "2024-06-10T08:00:02"
        },
        {
            "_id": "u12346",
            "name": "Jane Smith",
            "email": "jane@example.com",
            "password": "anothersecurepassword456",
            "about": "full-stack developer with a love for front-end technologies and UX design.",
            "tags": ["React", "CSS", "UX"],
            "answered": 15,
            "joinedon": "2023-05-12T09:15:30"
        },
        {
            "_id": "u12347",
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "password": "yetanotherpassword789",
            "about": "backend developer specializing in database management and server-side logic.",
            "tags": ["Node.js", "MongoDB", "SQL"],
            "answered": 8,
            "joinedon": "2022-11-20T11:45:00"
        },
        {
            "_id": "u12348",
            "name": "Bob Brown",
            "email": "bob@example.com",
            "password": "supersecurepassword101",
            "about": "devops engineer with expertise in cloud infrastructure and automation.",
            "tags": ["AWS", "Docker", "CI/CD"],
            "answered": 12,
            "joinedon": "2021-08-15T14:30:45"
        }
    ];

    const currentProfile = users.filter((user) => (user._id === id))[0]

    const currentUser =
    {
        "_id": "u12347",
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "password": "yetanotherpassword789",
        "about": "backend developer specializing in database management and server-side logic.",
        "tags": ["Node.js", "MongoDB", "SQL"],
        "answered": 8,
        "joinedon": "2022-11-20T11:45:00"
    }


    return (
        <div className="home-container-1">
            <LeftSidebar slideIn={slideIn} />
            <div className="home-container-2">
                <section>
                    <div className="user-details-container">
                        <div className="user-details">
                            <Avatar backgroundColor={"purple"} color={"white"} fontSize={"50px"} px={"40px"} py={"30px"} >
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-name">
                                <h1>
                                    {currentProfile?.name}
                                </h1>
                                <p>
                                    <FontAwesomeIcon icon={faBirthdayCake} /> {moment(currentProfile?.joinedon).fromNow()}
                                </p>
                            </div>
                        </div>
                        {currentUser?._id == id && (
                            <button className="edit-profile-btn" type="button" onClick={() => setUserSwitch(true)}>
                                <FontAwesomeIcon icon={faPen} /> &#160; Edit Profile
                            </button>
                        )}
                    </div>
                    <>
                        {userSwitch ? (
                            <EditProfileForm currentUser={currentUser} setUserSwitch={setUserSwitch} />
                        ) : (
                            <ProfileBio currentProfile={currentProfile} />
                        )}
                    </>
                </section>
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    slideIn: PropTypes.bool.isRequired,
};

export default UserProfile
