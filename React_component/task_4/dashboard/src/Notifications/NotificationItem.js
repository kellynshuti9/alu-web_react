import React from 'react';
import './Notifications.css';

// functional component ES6 shortcut
const NotificationItem = ({ type, html, value, markAsRead }) => {
    // JSX goes here
    return (
        <li
            data-notification-type={ type } dangerouslySetInnerHTML={ html }
            onClick={markAsRead}
        >{ value }</li>
    );
};

export default NotificationItem;