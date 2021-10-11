import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import mainlogo from './images/BullseyesLogoType_HorizontalA.svg'

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    mainlogo: {
        maxWidth: "150px",
        marginLeft: -10
    },
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props} >
            <img src={mainlogo} alt="mainlogo" className={classes.mainlogo} />
            <span className={classes.spacer} />
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
        </AppBar>
    );
};

export default MyAppBar;