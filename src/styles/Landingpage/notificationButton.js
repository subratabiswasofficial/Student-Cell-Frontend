import transparentBackground from '../../assets/transparentBackground.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: 'transparent',
        color: '#fff',
        borderRadius: '0px',
        transition: 'all 0.15s linear',
        overflow: 'visible'
    },
    container: {
        backgroundImage: `url(${transparentBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // boxShadow:theme.shadows[9],
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    header: {
        backgroundColor: theme.palette.common.orange,
        padding: '1em 3em',
        width: '25em',
        borderTopLeftRadius: 5,
        fontWeight: 400
    },
    headerText: {
        fontSize: '1.2em',
        fontFamily: 'Ubuntu, sans-serif'
    },
    notifications: {
        padding: '0 1em 0'
    },
    notificationItem: {
        backgroundColor: '#fff',
        width: '100%',
        padding: '0.7em'
    },
    notificationsText: {
        color: '#111',
        fontFamily: 'Ubuntu, sans-serif',
        maxWidth: '15em',
        wordWrap: 'break-word',
        fontSize: '1em'
    },
    notificationsFooter: {
        backgroundColor: theme.palette.common.orange,
        padding: '1.3em 3em',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    link: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '0.8em',
        marginLeft: 'auto',
        color: 'blue',
        cursor: 'pointer'
    },
    menuCloseButton: {
        backgroundColor: '#fff',
        opacity: 0.8,
        padding: '0.3em 0.7em',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.9
        },
        transition: 'all 0.3 ease'
    },
    avatar: {
        width: '2.5em',
        height: '2.5em',
        overflow: 'visible',
        backgroundColor: '#fff',
        cursor: 'pointer',
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 10
    }
}));

export default useStyles;
