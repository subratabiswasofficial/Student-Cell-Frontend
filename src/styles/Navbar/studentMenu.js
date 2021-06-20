import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: 'transparent',
        color: '#fff',
        borderRadius: '0px',
        transition: 'all 0.15s linear'
    },
    menuContainer: {
        maxWidth: '90em',
        maxHeight: '70em',
        transition: 'all 0.15s linear'
    },
    navLinks: {
        color: theme.palette.common.darkBlue,
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.15em',
        marginLeft: '0.5em',
        fontWeight: 400,
        opacity: 1
    },
    navItem: {
        backgroundColor: '#F8F8F8',
        opacity: 0.7,
        cursor: 'pointer',
        padding: '0 6em 0 1em',
        transition: 'all 0.15s linear'
    },
    activeNavItem: {
        backgroundColor: '#fff',
        opacity: 1,
        cursor: 'pointer',
        borderLeft: `3px solid ${theme.palette.common.orange}`,
        padding: '0 6em 0 1em',
        transition: 'all 0.15s linear'
    },
    des: {
        color: theme.palette.common.darkBlue,
        fontFamily: 'Ubuntu, sans-serif'
    },
    desIcon: {
        backgroundColor: theme.palette.common.orange,
        color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.common.orange
        }
    },
    subtext: {
        fontFamily: 'Ubuntu, sans-serif'
    }
}));

export default useStyles;
