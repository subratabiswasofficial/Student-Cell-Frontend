import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundBlendMode: 'screen',
        background: `rgba(196,196,196,0.7)`,
        width: '100vw',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: '6em',
        paddingLeft: '1em',
        paddingRight: '1em',
        paddingBottom: '1em'
    },
    inputItem: {
        width: '100%',
        marginBottom: '1em'
    },
    inputContainer: {
        padding: '1em'
    },
    notificationItem: {
        backgroundColor: '#fff',
        width: '100%',
        padding: '0.7em',
        marginBottom: '1px'
    },
    notificationsText: {
        color: '#111',
        fontFamily: 'Ubuntu, sans-serif',
        maxWidth: '15em',
        wordWrap: 'break-word',
        fontSize: '1em'
    },
    link: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '0.8em',
        marginLeft: 'auto',
        color: 'blue',
        cursor: 'pointer'
    },
    saveButton: {
        backgroundColor: theme.palette.common.orange,
        '&:hover': {
            backgroundColor: theme.palette.common.orange
        },
        padding: '0.5em 2em',
        color: '#fff'
    }
}));

export default useStyles;
