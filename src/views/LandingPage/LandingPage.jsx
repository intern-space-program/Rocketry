import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";


// sections of this Page
import SectionHeaders from "../SectionsPage/Sections/SectionHeaders";
import SectionProject from "../SectionsPage/Sections/SectionProjects";
import TeamSection from "../SectionsPage/Sections/SectionTeams";
import SectionContact from "../SectionsPage/Sections/SectionContacts";
import Footer from "components/Footer/Footer.jsx";
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
        {/* <div className={classes.main}>
          <SectionHeaders id="headers" />
        </div> */}
        <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionHeaders id="headers" />
          <div className={classes.container}>
            <SectionProject />
            <TeamSection />
            <SectionContact />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                {/* <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#"
                      className={classes.block}
                    >
                      Intern Space Program
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#"
                      className={classes.block}
                    >
                      Contact us
                    </a>
                  </ListItem>
                </List> */}
              </div>
              <div className={classes.right}>
                {/* &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "} */}
                <a href="#">Intern Space Program</a> 
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(sectionsPageStyle)(SectionsPage);
