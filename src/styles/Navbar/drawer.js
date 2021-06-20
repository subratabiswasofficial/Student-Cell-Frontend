import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '30px',
        width: '30px',
        color: '#fff'
    },
    drawer: {
        backgroundColor: '#fff',
        minWidth: '250px'
    },
    logo: {
        maxWidth: '17em',
        marginLeft: '-1em'
    },
    logoWraper: {
        backgroundColor: theme.palette.common.darkBlue,
        padding: '1em 0 1em 0',
        width: '100%'
    },
    accordion: {
        maxWidth: 300,
        border: 0
    },
    link: {
        color: theme.palette.common.darkBlue,
        fontSize: '1em',
        fontFamily: 'Ubuntu, sans-serif',
        cursor: 'pointer',
        marginTop: '0.7em',
        marginBottom: '0.7em'
    },
    heading: {
        color: theme.palette.common.darkBlue,
        fontSize: '1.1em',
        fontFamily: 'Ubuntu, sans-serif'
    },
    text: {
        color: '#fff',
        cursor: 'pointer',
        fontFamily: 'Ubuntu, sans-serif'
    },
    accordionDetails: {
        backgroundColor: '#C4C4C4',
        width: '100%',
        opacity: 0.9
    }
}));

export default useStyles;
