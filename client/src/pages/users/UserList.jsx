

import User from './User';
import './Users.css';

export default function UserList() {

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

    return (
        <div className='user-list-container'>
            {
                users.map((user) => (
                    <User key={user?._id} user={user} />
                ))
            }
        </div>
    )
}