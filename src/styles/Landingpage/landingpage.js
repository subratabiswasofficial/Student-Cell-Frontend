import { makeStyles } from '@material-ui/core/styles';
import jgecBackground from '../../assets/landingpageBackground.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${jgecBackground})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    text: {
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '3em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5em'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em'
        }
    },
    inputItemRoot: {
        width: '50%',
        height: '3em',
        borderRadius: '10px',
        backgroundColor: '#fff',
        opacity: 0.85,
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        }
    },
    inputRoot: {
        backgroundColor: 'transparent',
        width: '25em',
        [theme.breakpoints.down('md')]: {
            width: '20em'
        },
        [theme.breakpoints.down('sm')]: {
            width: '16em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '12em'
        }
    },
    inputInput: {
        color: theme.palette.common.lightDark
    },
    button: {
        backgroundColor: theme.palette.common.orange,
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        '&:hover': {
            backgroundColor: theme.palette.common.orange
        },
        marginRight: '2em',
        borderRadius: 5,
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            marginBottom: '2em'
        }
    }
}));

export default useStyles;
