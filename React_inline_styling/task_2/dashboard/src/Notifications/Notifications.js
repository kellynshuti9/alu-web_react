import React from 'react';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    // Notifications Panel
    Notifications: {
        border: '2px dashed var(--holb - red)',
        padding: '24px',
    },

    // Notification List Container
    NotificationUnorderedList: {
        listStyleType: 'none',
    },


    // Notification list item
    NotificationsListItem: {
        listStyleType: 'disc',
    },

    NotificationsButton: {
        float: 'right',
        height: '25px',
        width: '25px',
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'none',
        border: 'none',
    },

    NotificationsButtonImg: {
        height: '20px',
        width: '20px',
    },

    menuItem: {
        position: 'absolute',
        top: '0',
        right: '0',
        margin: '10px',
    },
})

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    // Lifecycle Methods
    shouldComponentUpdate(updatedProps, updatedState) {
        if (updatedProps.listNotifications.length > this.props.listNotifications.length)
            return true;
        return false;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <>
            { displayDrawer ?
                    <div className={ css(styles.Notifications) } id="Notifications">
                    { listNotifications.length > 0 ? (
                        <>
                            <button
                                className={css(styles.NotificationsButton)}
                                aria-label="Close"
                                onClick={ () => {
                                    console.log('Close button has been clicked');
                                } }
                            ><img
                            className={css(styles.NotificationsButtonImg)}
                                    src={ close_icon }
                                    alt="Close"
                                />
                            </button>
                            <p>Here is the list of notifications</p>
                            <ul className={css(styles.NotificationUnorderedList)}>
                                { listNotifications.map((notification) => (
                                    <NotificationItem
                                        className={css(styles.NotificationsListItem)}
                                        key={ notification.id }
                                        type={ notification.type }
                                        value={ notification.value }
                                        html={ notification.html }
                                        markAsRead={() => this.markAsRead(notification.id)}
                                    />
                                )) }
                            </ul>
                        </>
                    ) : <p>No new notification for now</p> }
                </div>
            : (
                <div className={ css(styles.menuItem) } id="menuItem">
                    Your notifications
                </div>
            )
        }
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;