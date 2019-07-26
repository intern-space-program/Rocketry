import React from "react";
// nodejs library that concatenates classes
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

// Spring Team
// import elliot from "assets/img/faces/Ell.JPG";
// import mateo from "assets/img/faces/Mat.jpeg";
// import joe from "assets/img/faces/Joe.jpg";
// import mikaela from "assets/img/faces/Mikaela.jpg";
// import morgan from "assets/img/faces/Morgan.jpg";
// import noah from "assets/img/faces/Noah.jpg";
// import reed from "assets/img/faces/Reed.jpg";
// import kath from "assets/img/faces/Kath.jpg";
// import amanda from "assets/img/faces/Amanda.jpg";
// import kolten from "assets/img/faces/kolten.jpg";
// import alex from "assets/img/faces/alex.jpg";
// import ralph from "assets/img/faces/Ralph.jpg";
// import shaun from "assets/img/faces/Shaun.jpg";
// import lee from "assets/img/faces/Lee.jpg";
// import dani from "assets/img/faces/daniela.jpg";
// import michael from "assets/img/faces/michael.jpeg";
// import alien from "assets/img/alien.jpg";

// Summer Team
import Allen from "assets/img/summer_team/Allen.jpg";
import JoeAmar from "assets/img/summer_team/JoeA.jpg";
import Victoria from "assets/img/summer_team/Victoria.jpg";
import ReedV from "assets/img/summer_team/ReedV.jpg";
import MorganN from "assets/img/summer_team/Morgan.jpg";
import ElliotB from "assets/img/summer_team/ElliotB.jpg";
import KathrynR from "assets/img/summer_team/Kathryn.jpg";
import Kolten from "assets/img/summer_team/Kolten.jpg";
import Anyssa from "assets/img/summer_team/Anyssa.jpg";
import Dillan from "assets/img/summer_team/Dillan.jpg";
import Waylon from "assets/img/summer_team/Waylon.jpg";
import Nicholas from "assets/img/summer_team/Nicholas.jpg";
import Erika from "assets/img/summer_team/Erika.jpg";
import Paulina from "assets/img/summer_team/Paulina.jpg";
import Emma from "assets/img/summer_team/Emma.jpg";
import Amanda from "assets/img/summer_team/Amanda.jpg";
import Shaun from "assets/img/summer_team/Shaun.jpg";
import Alejandro from "assets/img/summer_team/Alejandro.jpg";
import Shaurya from "assets/img/summer_team/Shaurya.jpg";
import Yash from "assets/img/summer_team/Yash.jpg";
import ElliotK from "assets/img/summer_team/ElliotK.jpg";
import Varsha from "assets/img/summer_team/Varsha.jpg";
import Victor from "assets/img/summer_team/Victor.jpg";
import Rushi from "assets/img/summer_team/Rushi.jpg";
import Rajiv from "assets/img/summer_team/Rajiv.jpg";
import Connor from "assets/img/summer_team/Connor.jpg";
import Mike from "assets/img/summer_team/Mike.jpg";
import Gerardo from "assets/img/summer_team/Gerardo.jpg";
import Isaac from "assets/img/summer_team/Isaac.jpg";
import Mark from "assets/img/summer_team/Mark.jpg";
import Cam from "assets/img/summer_team/Cam.jpg";
import Jeff from "assets/img/summer_team/Jeff.jpg";
import Noah from "assets/img/summer_team/Noah.jpg";
import Michael from "assets/img/summer_team/Michael.jpg";
import Ralph from "assets/img/summer_team/Ralph.jpg";
import Billy from "assets/img/summer_team/Billy.JPG";

function Headers({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  const dark = {
    color: "#3C4858",
    marginTop: ".625rem",
    minHeight: "auto",
    fontWeight: 700,
    fontFamily: "Roboto Slab, Times New Roman",
    marginBottom: "0.75rem",
    textDecoration: "none",
    fontSize: "1.125rem",
    lineHeight: "1.5em"
}

  const color = {
    color: "#6c757d"
  }

  const bio = {
    color: "#999",
    fontSize: "14px",
    margin: "0 0 10px"
  }

  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <Carousel {...settings}>
     {/* Carousel 1 START */}
     <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div>
      <div id="Team" className={classes.team}>
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
              <h2 className={classes.title} style={{color: "#3C4858"}}>Team Summer 2019</h2>
              <h5 className={classes.description}>
              We are a team of creative problem solvers. Our team brings a wealth of experience from some of the world’s most formidable organizations, agencies and startups.
              </h5>
            </GridItem>
          </GridContainer>
          {/* ROW 1 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/joe-amar" onClick={e => e.preventDefault()}>
                    <img  src={JoeAmar} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Joe Amar</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Team Leader</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  A former USAF Staff Sgt with Craftsman skill-level in Aerospace Propulsion, 
                  Joe’s long-time love of space travel led him to engineering at NASA.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Victoria} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Victoria Nelson </h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Vice President & Integration Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Victoria is pursuing a degree in aerospace engineering at Embry-Riddle Aeronautical University. 
                  She has a passion for things that go fast and spends almost all of her free time working on her school's electric land speed vehicle.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/reed-villarreal-605022151/" onClick={e => e.preventDefault()}>
                    <img src={ReedV} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Reed Villarreal</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Procurement Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Reed studies Finance at Texas A&M University, and work in the Resource Integration Office.  
                  He is responsible for obtaining all materials necessary for launch and acquiring the proper funding to cover the costs.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
        
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Cam} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Cameron Hood</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Auxiliary Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Cameron study Logistics at The University of North Texas. He enjoys video games and working in collaboration. Over the summer is working for the Center of Operations in the Logistics sector of NASA. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 2 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/morgannovak/" onClick={e => e.preventDefault()}>
                    <img src={MorganN} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Morgan Novak</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Morgan is an Electrical Engineer majoring in dork at the University of North Texas. Morgan has worked on multiple Avionics and Flight Operations Teams. Morgan's favorite and inspiring quote is: “Lezz go launch this boi!!".
                  </p>
                </CardBody>                
              </Card>
            </GridItem>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/briantoliveira/" onClick={e => e.preventDefault()}>
                    <img src={ElliotB} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Elliot Briant</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload Co-Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Elliot is a Senior at Make School majoring in Applied Computer Science and Data Science.
                  He is a creative and ambitious software developer. Elliot approaches any environment as an opportunity to learn and utilize his experience with computer programming.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/kathrynrobertson21/" onClick={e => e.preventDefault()}>
                    <img src={KathrynR} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Kathryn Robertson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Kathryn is a sophomore majoring in Electrical Engineering at Virginia Tech. 
                  This spring semester was her first tour at JSC, and she is excited for many more challenging and fun experiences to come!
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/kolten-knesek-37b3a817a/" onClick={e => e.preventDefault()}>
                    <img src={Kolten} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Kolten Knesek</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload, Flight & Launch Operations</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                    Kolten studies ESET at Texas A&M University. Strong and silent cowboy type with traditional values. Kolten loves reparing hardware and soldering.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 3 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/michael-boazzo-00b21410a/" onClick={e => e.preventDefault()}>
                    <img src={Allen} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Allen Jiang</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Allen is an incoming UT Austin Freshman majoring in Electrical Engineering. 
                  He is an alumni of Dawson High School and FRC Team 5414 in Pearland, TX.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/alex-kafer-01614147/" onClick={e => e.preventDefault()}>
                    <img src={Anyssa} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Anyssa Castorina</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Anyssa is an alum of Pearland High School and FRC Team Pearadox. 
                  She is excited to attend Rice University to pursue a degree in Electrical and Computer Engineering this fall. 
                  This is her second summer interning at JSC in the Command and Data Handling Branch.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

              <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Dillan} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Dillan McDonald</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload and Flight & Launch Operations</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Dillan goes to the University of Texas at Austin. He is the type of person who fills up all of his time with space related things. Self proclaimed nerd. 
                  Eats Ice cream by the half gallon, and survives off of instant mac n cheese. I don't know who let him in. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Connor} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Connor Jakubik</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Connor is a senior at Texas A&M University, he is an Aerospace Engineering student with Minor in Astrophysics. 
                  Connor have 3 years experience in VR simulations and he specialize in designing and implementing software architectures for scientifically accurate computation. He also like hiking and bouldering.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

          </GridContainer>
          {/* ROW 4 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Waylon} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Waylon Lee</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Waylon is a senior at Texas A&M University majoring in Aerospace engineering. He works in ER-7 with SAFER simulation. Outside of engineering, he enjoys singing and beatboxing for a collegiate acapella group.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Shaun} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Shaun Quinn</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                    Shaun is studing Engineering at Orange Coast College. With his years of experience in solar photovoltaic design, he brings experience in project 
                    management and concept realization to the team.  He is excited to use his education and background to deploy 
                    successful electronics and procedures. 
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                </CardFooter>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Nicholas} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Nicholas Houghton</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations </h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Nicholas study Mechanical engineer at Michigan State University. 
                  Over the summer he is working in EC5 on xEMU development.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Erika} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Erika Storvick</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations and Recovery</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Rising senior at Columbia University studying Mechanical Engineering and Physics. 
                  Current USRA intern at JSC working in the Crew and Thermal Systems Division on the water technologies team. 
                  Enjoys participating in the intramural sports and various intern activities such as rocketry.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          {/* ROW 5 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Paulina} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Paulina Vazquez-Pena</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                    Paulina is a student at University of Texas at Austin. She is NASA Computer Engineering Intern sponsored by CACI, employeed by LZ Technology. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Alejandro} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Alejandro Cantu</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Rising freshman from Baytown, TX majoring in computer science at University of Texas at Austin. USRA intern in NS developing GIS systems. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Emma} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Emma Jaynes</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Recovery Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Emma is a senior studying Aerospace Engineering at North Carolina State University. 
                  She is a member of the High-Powered Rocketry Club at NC State, and has many years of model rocketry experience. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://instagram.com/mandalu30" onClick={e => e.preventDefault()}>
                    <img src={Amanda} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Amanda Graziosi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Recovery, Safety & Mission Assurance</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Amanda is  currently pursuing my Master’s Degree in Business Administration at University of Houston Clear Lake.
                  She is responsible for leading and executing the recovery system of the rocket.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          {/* ROW 6 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Rajiv} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Rajiv Ajodha</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Recovery</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                    Rajiv is a senior at University of Houston. He is a Computer Science student with a minor in Leadership Studies.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Shaurya} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Shaurya Gupta</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                    Shaurya is a Aerospace Engineer student at The University of Texas at Austin. He enjoys team work and building rockets.  
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Yash} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Yash Kadadi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Yash is a rising junior at the Westminster Schools of Atlanta. He has a deep interest in machine learning and artificial intelligence. In his free time, he enjoys filmmaking and composing music.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Varsha} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Varsha Kumar</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Varsha is studying Computer Science and Robotics at Carnegie Mellon University, and she is really thankful for the opportunity to help out and learn from my experience at NASA.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          {/* ROW 7 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Victor} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Victor Yu</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Victor is Mechanical Engineering Graduate Student at Binghamton University. 
                  One of his interests is astrodynamics. He enjoys hiking, drawing, painting and traveling.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Rushi} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Ruchi Shah</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Ruchi is a current high school student at Stephen F. Austin High School. She wants to major in computer science in college and she hopes to one day work in the space industry.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={ElliotK} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Elliot Kann</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                   Elliot is a sophomore studying Mechanical Engineering at Cornell University. 
                   At NASA, he works in the Innovation Design Center machine shop. 
                   He always been meaning to join a model rocket team, but it just never happened. 
                   He is excited to join the ISP and launch some rockets! 
                   Outside of engineering, he is passionate about rock climbing and other outdoor adventures.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Jeff} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Jeffrey Young</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Jeffrey is a senior in Mechanical Engineering at Texas A&M University, graduating in December 2019. Interested in working in the Aerospace Industry. When he is not working you can find him playing basketball, messing with electronics, or at a Rockets game.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            {/* ROW 9 */}
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Mike} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Michael Boazzo</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Michael is studying Aerospace Engineering at the Ohio State University. He is currently working in the Inventory and Stowage Group in the Flight Operations Directorate. Michael works on Stow Track, a new application the astronauts will use to assist them in packing and unpacking items on-board the ISS. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Gerardo} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Gerardo Javier Barillas</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Gerardo is graduate Aerospace Engineering student from Texas A&M, class of '18. Rocketry enthusiast who has designed, built, and tested a 54mm solid rocket motor.
                  Also, member of Operation Space intercollegiate space shot team.
                  </p>
                </CardBody>
              </Card>
            </GridItem>


            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Isaac} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Isaac Bensignor</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Isaac is studying Aerospace Engineering at The Ohio State University. 
                  As Chief Designer for the Propulsion Sub-system, he was responsible for designing a CAD model that housed the motor and the airframe integration piece. Isaac is based in the Simulations and Graphics Branch and works on enhancing the Lunar Rover simulation.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="www.internspaceprogram.com" onClick={e => e.preventDefault()}>
                    <img src={Mark} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Mark Daniel Tredway</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                   Mark is a Aerospace Engineering student at University of Maryland. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={Noah} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Noah Vasquez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Safety and Mission Assurance Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Noah is majoring in Mechanical Engineering at University of Houston. 
                  He is currently interning with LZ Technology as an Engineering Technician 
                  with experience as an OCC specialist. Noah is interested in the space program 
                  and he is also passionate about cars and flights.

                  </p>
                </CardBody>
              </Card>
            </GridItem>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Michael} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Michael Angel Rivas Valadez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Auxiliary</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Michael is a Chemical Engineering student at University of California, Berkeley. He is working as an intern on water recovery systems for future exploration missions.
                  </p>
                </CardBody>
              </Card>
            </GridItem>


            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/rafael-gonzalez-097816131/" onClick={e => e.preventDefault()}>
                    <img src={Ralph} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Rafael Gonzalez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Integration</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Rafael is a senior at The Citadel The Military College of South Carolina, majoring Mechanical Engineering. Rafael is extremely passionate about sports and bodybuilding. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Billy} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>William Young</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  William is a grad student at Texas A&M. This summer he worked in FOD with the ADCO group and also did EVGNC work for future space missions.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
    {/* Carousel 1 END */}
    {/* Carousel 2 START */}
    </div>
    {/* Team 1 END */}
 </Carousel>
  );
}

export default withStyles(headersStyle)(Headers);
