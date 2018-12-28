import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <Typography component="p">더 나은 서비스를 제공하기 위해 개편 준비 중입니다.</Typography>
        <Typography component="p">To provide better service, we are preparing for new version.</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);