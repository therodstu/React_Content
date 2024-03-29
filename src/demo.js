import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";

const styles = {
  tabs: {
    background: "#fff"
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

class DemoTabs extends React.Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs
          value={index}
          fullWidth
          onChange={this.handleChange}
          style={styles.tabs}
        >
          <Tab label="Branding" />
          <Tab label="Video/Audio" />
          <Tab label="Development" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide 1
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide 2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide 3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default DemoTabs;
