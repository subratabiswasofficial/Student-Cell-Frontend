import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/styles';

const Alert = ({ alerts }) => {
    const theme = useTheme();
    return (
        <>
            {alerts &&
                alerts.length > 0 &&
                alerts.map((alert) => (
                    <Snackbar
                        key={alert.id}
                        open={alert.open}
                        message={alert.msg}
                        ContentProps={{
                            style: {
                                backgroundColor: alert.backgroundColor === 'Success' ? theme.palette.success.main : theme.palette.error.main,
                                display: 'flex',
                                justifyContent: 'center'
                            }
                        }}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        autoHideDuration={4000}
                    />
                ))}
        </>
    );
};

const mapStateToProps = (state) => {
    return { alerts: state.alert };
};

export default connect(mapStateToProps)(Alert);
