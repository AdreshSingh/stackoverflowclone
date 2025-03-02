import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import TagList from './TagList.jsx';

import { tagsList } from './taglist';
import './Tags.css';

function Tags({ slideIn, handleSlideIn }) {

    return (
        <div className='home-container-1'>
            <LeftSidebar slideIn={slideIn} />
            <div className='home-container-2'>
                <h1 className='tags-h1'>
                    Tags
                </h1>
                <p>A Tag is a keyword or label that categories your question with other similar questions</p>
                <p className="tags-p">
                    Using the Right tags make it easier for others  to find and answer your question
                </p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag, index) => (
                            <TagList key={index} tag={tag} />
                        ))
                    }
                </div>
            </div>
        </div>)
}
export default Tags