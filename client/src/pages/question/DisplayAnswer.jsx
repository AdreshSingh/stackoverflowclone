import moment from 'moment';

import './DisplayAnswer.css';
import { Link } from 'react-router-dom';
import { Avatar } from '../../components/avatar/Avatar';

export function DisplayAnswer({ question, handleShare }) {
    const user = null;
    const handleDelete = (answerid, noofanswer) => {

    }

    return (
        <div>
            {
                question?.answer?.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{question?.answerbody}</p>
                        <div className='question-actions-user'>
                            <div>
                                <button type='button' onClick={handleShare}>Share</button>
                                {
                                    user?.result?._id === ans?.userid && (
                                        <button type='button' onClick={() => (handleDelete(ans._id, question?.noofanswer))}>Delete</button>
                                    )
                                }
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredon).fromNow()}</p>
                                <Link to={`/Users/${ans.userid}`} className='user-link' style={{ color: "#0086d8" }}>
                                    <Avatar backgroundcolor={'orange'} px={'8px'} py={'5px'} borderRadius={'4px'}>
                                        {ans.userposted.charAt(0).toUppercase()}
                                    </Avatar>
                                    <div>{ans.userposted}</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}