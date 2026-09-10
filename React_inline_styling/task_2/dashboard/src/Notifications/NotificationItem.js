import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    NotificationListItemDefault: {
        color: 'blue',
    },

    NotificationListItemUrgent: {
        color: 'red',
    },
});

// functional component ES6 shortcut
const NotificationItem = ({ type, html, value, markAsRead }) => {
    // JSX goes here
    return (
        <li
            data-notification-type={ type }
            dangerouslySetInnerHTML={ html }
            onClick={ markAsRead }
            className={ type === 'default' ? css(styles.NotificationListItemDefault) : css(styles.NotificationListItemUrgent) }
        >{ value }</li>
    );
};

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    type: PropTypes.string.isRequired
};

NotificationItem.defaultProps = {
    type: 'default',
}

export default memo(NotificationItem);