import { makeStyles } from '@material-ui/core/styles';
import jgecBackground from '../../assets/landingpageBackground.jpg';
import modal from '../../assets/modal.png';
import modalContainer from '../../assets/modalContainer.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundBlendMode: 'screen',
        background: `url(${jgecBackground}),url(${modal})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all 3s ease-in-out',
        padding: '1em',
        [theme.breakpoints.down('xs')]: {
            mpadding: '0em'
        }
    },
    logo: {
        width: '17em',
        marginBottom: '3em',
        marginTop: '2em'
    },
    inputContainer: {
        marginBottom: '2em'
    },
    inputLabel: {
        marginRight: '5em',
        color: '#323C4F',
        fontFamily: 'Ubuntu, sans-serif',
        opacity: 0.7,
        [theme.breakpoints.down('sm')]: {
            marginRight: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '1em'
        }
    },
    inputRoot: {
        backgroundColor: '#fff',
        width: '20em',
        border: '1px solid #525E6C',
        borderRadius: '5px',
        padding: '0 0.5em 0 1em',
        [theme.breakpoints.down('sm')]: {
            width: '15em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '14em',
            padding: '0.3em 0.3em 0.3em 0.5em'
        }
    },
    header: {
        color: '#323C4F',
        fontFamily: 'Ubuntu, sans-serif',
        opacity: 0.7,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5em'
        }
    },
    inputInput: {
        color: '#323C4F',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '0.9em'
    },
    activeTab: {},
    tabText: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.1em'
    },
    submitBtn: {
        backgroundColor: theme.palette.common.orange,
        '&:hover': {
            backgroundColor: theme.palette.common.orange
        },
        padding: '0.5em 1.5em',
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.1em',
        marginRight: '2em'
    },
    tab: {
        backgroundColor: '#F8F8F8',
        padding: '1em 2em',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        marginRight: '1px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out'
    },
    modalContainer: {
        background: `url(${modalContainer})`,
        backgroundRepeat: 'no-repeat',
        padding: '3em 0 3em 0',
        borderRadius: '15px'
    }
}));

export default useStyles;
