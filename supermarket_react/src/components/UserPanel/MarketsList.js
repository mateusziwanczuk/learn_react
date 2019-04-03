import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
	margin: 'auto',
    width: '70%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(22),
    color: theme.palette.text.secondary,
  },
});

class MarketsList extends React.Component {
  state = {
    markets: [],
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  componentDidMount() {
    fetch('markets.json')
      .then(response => response.json())
      .then(value => this.setState({ markets: value}))
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <>
        <div className={classes.root}>
          <h1 className="user__container__header">Find your market:</h1>
          <div className="markets__list__container">
            {this.state.markets.map(market => {
              return(
                <ExpansionPanel key={market.id} expanded={expanded === `panel${market.id}`} onChange={this.handleChange(`panel${market.id}`)}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>{market.contactInfo.address.city}</Typography>
                    <Typography className={classes.secondaryHeading}>{market.contactInfo.address.state}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      {market.contactInfo.address.street}<br />
                      {market.contactInfo.address.zipcode} {market.contactInfo.address.city} {market.contactInfo.address.state}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                )})}
          </div>
        </div>
      </>
    );
  }
}

MarketsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarketsList);