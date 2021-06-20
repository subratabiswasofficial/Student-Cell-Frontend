import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        position: 'relative',
        overflow: 'visible'
    },

    avatar1: {
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '30em',
            height: '10em',
            backgroundColor: '#ec6565',
            top: '-73px',
            left: '-20px',
            transition: 'all 0.4s ease'
        }
    },
    avatar2: {
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '30em',
            height: '10em',
            backgroundColor: '#69b2ae',
            top: '-73px',
            left: '-20px',
            transition: 'all 0.4s ease'
        }
    },
    avatar3: {
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '30em',
            height: '10em',
            backgroundColor: '#5fc789',
            top: '-73px',
            left: '-20px',
            transition: 'all 0.4s ease'
        }
    },
    card: {
        borderBottom: '4px solid #C4C4C4',
        width: '25em',
        padding: '2em 0 1em 0',
        overflow: 'hidden',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }
}));

export default useStyles;
