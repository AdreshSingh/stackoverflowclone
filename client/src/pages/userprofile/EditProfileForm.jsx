import { useState } from "react";

import './UserProfile.css'

function EditProfileForm({ currentUser, setUserSwitch }) {
    const [name, setName] = useState(currentUser?.name);
    const [about, setAbout] = useState(currentUser?.about);
    const [tags, setTags] = useState([...currentUser.tags]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tags[0] == '' || tags.length == 0) {
            alert("update tags field")
        }
        setUserSwitch(false)
    }


    return (
        <div>

            <h1 className="edit-profile-title">Edit Your Profile</h1>
            <h2 className="edit=profile-title-2">Public Information</h2>

            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h3>Display Name</h3>
                    <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
                </label>

                <label htmlFor="about">
                    <h3>About Me</h3>
                    <textarea name="" id="about" cols={"30"} rows={"10"} value={about} onChange={(e) => (setAbout(e.target.value))}></textarea>
                </label>

                <label htmlFor="name">
                    <h3>Display Name</h3>
                    <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
                </label>
                <br />
                <input type="submit" value="Save Profile" />
                <button type="button" className="user-cancel-btn" onClick={() => setUserSwitch(false)}>Cancel</button>
            </form>
        </div>
    )
}
export default EditProfileForm;