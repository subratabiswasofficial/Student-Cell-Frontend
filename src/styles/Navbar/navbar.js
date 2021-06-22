import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: theme.palette.common.darkBlue,
        [theme.breakpoints.down('xs')]: {
            padding: '0.5em 0 0.5em 0'
        }
    },
    logo: {
        maxWidth: '20em',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '13.5em'
        }
    },
    navlink: {
        color: theme.palette.common.darkBlue,
        fontSize: '1em',
        fontFamily: 'Ubuntu, sans-serif',
        cursor: 'pointer',
        paddingLeft: '0.5em'
    },
    navIcon: {
        verticalAlign: 'bottom',
        fontSize: '1.5em',
        transition: 'all 0.15s linear'
    },
    navItem: {
        marginRight: '2.5em',
        paddingTop: '0.2em',
        paddingBottom: '0.4em'
    }
}));

export default useStyles;
