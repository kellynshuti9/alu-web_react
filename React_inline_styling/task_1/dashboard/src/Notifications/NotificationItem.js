import React, { memo } from 'react';
import PropTypes from 'prop-types';

// functional component ES6 shortcut
const NotificationItem = ({ id, type, html, value, markAsRead }) => {
    // JSX goes here
    return (
        <li
            data-notification-type={ type }
            dangerouslySetInnerHTML={ html }
            onClick={ () => markAsRead(id) }
        >{ value }</li>
    );
};

NotificationItem.propTypes = {
    id: PropTypes.number,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
}

export default memo(NotificationItem);