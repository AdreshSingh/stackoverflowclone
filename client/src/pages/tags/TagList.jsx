import PropTypes from 'prop-types';

export default function TagList({ tag }) {

    return (
        <div className="tag">
            <h5>{tag.tagName}</h5>
            <p>{tag.tagDesc}</p>
        </div>
    )
}

TagList.propTypes = {
    tag: PropTypes.object.isRequired,
};

