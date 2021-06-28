import React from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

const Alert = ({ alerts }) => {
    const { enqueueSnackbar } = useSnackbar();
    const showSnack = (msg,  variant)  =>  {
        enqueueSnackbar(msg, { variant: variant, autoHideDuration: 3000 });
    };
    return <>
      {alerts && alerts.length > 0 && alerts.map((alert) => {
        const {msg,variant} = alert;
        return showSnack(msg,variant)
      })}
    </>;
};

const mapStateToProps = (state) => {
    return { alerts: state.alert };
};

export default connect(mapStateToProps)(Alert);
