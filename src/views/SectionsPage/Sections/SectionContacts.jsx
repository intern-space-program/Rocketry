import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from '@material-ui/core/Input';
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
// import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";


import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";

import city from "assets/img/examples/city.jpg";


const divStyle = {
  paddingTop: '30px',
  opacity: 1,
  fontSize: '14px',
  fontFamily: "Roboto",
  fontWeight: 400,
  lineHeight: 1.42857,
};

const divStyle2 = {
  paddingTop: '30px',
  opacity: 1,
  fontSize: '14px',
  fontFamily: "Roboto",
  fontWeight: 400,
  lineHeight: 1.42857,
  width: "357px"
}

const divStyle3 = {
  paddingTop: '30px',
  opacity: 1,
  fontSize: '14px',
  fontFamily: "Roboto",
  fontWeight: 400,
  lineHeight: 1.42857,
  width: "357px",
  height: "95px"
}

class SectionContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        {/* Contact us 1 START */}
        <div
          className={`${classes.contacts} ${classes.section}`}
          style={{ backgroundImage: `url(${city})` }}
        >
          <div id="Contact" className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={5} md={5}>
                <h2 className={classes.title}>Get in Touch</h2>
                <h5 className={classes.description}>
                  You need more information? Check what other persons are saying
                  about our rocket.
                </h5>
                <InfoArea
                  className={classes.infoArea}
                  title="Where do we meet?"
                  description={
                    <span>
                      2101 E NASA Pkwy,
                      <br /> Houston,
                      <br /> TX 77058
                    </span>
                  }
                  icon={PinDrop}
                />
                <InfoArea
                  className={classes.infoArea}
                  title="Send us an email"
                  description={
                    <span>
                      <a href="mailto:internspaceprogram@gmail.com">internspaceprogram@gmail.com</a>
                    </span>
                  }
                  icon={Email}
                />
              </GridItem>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <Card className={classes.card1}>
                  <form action="https://formspree.io/internspaceprogram@gmail.com?first_name=first" method="POST">
                    <CardHeader
                      contact
                      color="primary"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Contact Us</h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                        <input type="hidden" name="_subject" value="New submission!" />
                          <Input
                            style={divStyle}
                            type="text" 
                            name="first_name"
                            placeholder="First Name"
                            id="float"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <Input
                            style={divStyle}
                            type="text" 
                            name="last_name"
                            placeholder="Last Name"
                            id="last"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <Input
                        style={divStyle2}
                        type="email" 
                        name="email"
                        placeholder="Email Address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <Input
                        style={divStyle3}
                        type="text" 
                        name="message"
                        placeholder="Your Message"
                        id="message"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        classes={{ label: classes.label }}
                        label="I'm not a robot"
                      />
                      <Button
                      color="primary" 
                      className={classes.pullRight}
                      type="submit" 
                      value="Send"
                      >
                      Send Message
                      </Button>
                    
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Contact us 1 END */}
      </div>
    );
  }
}

export default withStyles(contactsStyle)(SectionContacts);
