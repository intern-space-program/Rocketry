/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import SvgIcon from '@material-ui/core/SvgIcon'
// @material-ui/icons
import Airplane from "@material-ui/icons/AirplanemodeActive"
import Propulsion from "@material-ui/icons/Whatshot";
import Code from "@material-ui/icons/Code";
import Report from "@material-ui/icons/Report";
import Verify from "@material-ui/icons/VerifiedUser";
import Track from "@material-ui/icons/TrackChanges";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import cardProject2 from "assets/img/logo.png";
import cardProject5 from "assets/img/t.gif";

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Project 4 START */}
      <div className={`${classes.projects} ${classes.projects4}`}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>
                Let's talk about our team organization
              </h2>
              <h5 className={classes.description}>
              A structured team hierarchy is recommended to successfully complete the mission in the limited
              time of the semester. Structured project management, and sub-teams, helped increase member
              retention, insuring the rocket development stays on schedule, and ultimately lead to a successful
              mission.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject2})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <a href="#" onClick={e => e.preventDefault}> */}
                    {/* <h3 className={classes.cardTitle}></h3>
                    <p className={classes.cardDescription}>
                      Insert a small paragraph about the rocket
                    </p> */}
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="Airframe"
                description="The Airframe team is responsible for designing an airframe, and run simulations to insure a stable rocket is being built."
                icon={Airplane}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Avionics"
                description="The Avionics team is responsible for developing the hardware and software for all
                avionics aboard the rocket, including payload avionics."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="Flight & Launch Operations (FLO)"
                description="The Flight & Launch Operations team is responsible to plan the mission logistics, train themselves, along with any operators, and launch/fly the mission."
                icon={Report}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Safety & Mission Assurance (S&MA)"
                description="The S&MA team is responsible to insure all testing,
                development, and the final launch is being done in a safe manner, complies with all federal, state, local laws and others."
                icon={Verify}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Propulsion"
                description="This team is responsible for determining the proper
                propulsion method to use, and developing any structure necessary to integrate with the airframe, and other sub-systems, in the rocket."
                icon={Propulsion}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Recovery"
                description="Recovery is responsible for the recovery system on the rocket. Depending on
                the mission, this team could be extremely complex, and is essential for successful mission."
                icon={Track}
                iconColor="info"
              />
              {/* <InfoArea
                className={classes.info4}
                title="Procurement"
                description="Procurement is an individual focused on managing the budget, Bill of
                Materials (BOM), part orders, and finally ordering the parts at the cheapest possible price."
                icon={Group}
                iconColor="info"
              /> */}
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}></h3>
                    <p className={classes.cardDescription}>
                      
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 4 END */}
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
