import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons


// sections of this Page
import SectionHeaders from "./sections/SectionHeaders";
import SectionProduct from "./sections/SectionProduct";
import TeamSection from "./sections/TeamSection";
import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.jsx";

class SectionsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  }
  scrollGo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.main}>
          <SectionHeaders id="headers" />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
            <TeamSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(sectionsPageStyle)(SectionsPage);
