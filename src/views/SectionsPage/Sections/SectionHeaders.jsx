import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { HashLink as Link } from 'react-router-hash-link';
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

import bg12 from "assets/img/space.png";

// const im1 = {
//   backgroundPositionY: 0
// }
function SectionHeaders({ ...props }) {
  const { classes, ...rest } = props;
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 1 START */}
      <div>
        <Header
          absolute
          brand="Intern Space Program"
          color="transparent"
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#Home"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link to="/#Home"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                    >Home</Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#About"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link to="/#About"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                    >About us</Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#Team"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link to="/#Team"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                    >Team</Link>
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#Contact"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Link to="/#Contact"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                    >Contact us</Link>
                  </Button>
                </ListItem>
              </List>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.twitch.com/internspaceprogram"
                    target="_blank"
                    className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                  >
                    <i className={"fab fa-twitch"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.youtube.com/channel/UCl2WnBoD45lBxIsYjoj-OFA?view_as=subscriber"
                    target="_blank"
                    className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                  >
                    <i className={"fab fa-youtube"} />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/internspaceprogram"
                    target="_blank"
                    className={`${classes.navLink} ${classes.navLinkJustIcon}`}
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                </ListItem>
              </List>
            </div>
          }
        />
        <div
          id="Home"
          className={classes.pageHeader}
          style={{ backgroundSize: "cover", backgroundImage: `url("${bg12}")` , backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
        >
          <div className={classes.container}>
            <GridContainer wrap="wrap-reverse">
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Intern Space Program</h1>
                <h4>
                The The Intern Space Program is an essential part of the Johnson Space Center co-tern
                experience. The purpose of this committee is to provide an environment for co-terns to learn,
                experiment, and develop new skills, and technology, while working towards the common goal of
                launching a rocket.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.twitch.com/internspaceprogram"
                  target="_blank"
                  rel=""
                >
                  <i className="fas fa-ticket-alt" />
                  Watch Now
                </Button>
              </GridItem>
              {/* <GridItem xs={12} sm={12} md={5} className={classes.mlAuto} style={{paddingTop: "100px"}}>
                <div className={classes.iframeContainer}>
                  <iframe
                    height="250"
                    src="https://www.youtube.com/embed/uj3FqkflC7g"
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen=""
                    title="Rocket live view"
                  />
                </div>
              </GridItem> */}
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 1 END */}
    </div>
  );
}

export default withStyles(headersStyle)(SectionHeaders);
