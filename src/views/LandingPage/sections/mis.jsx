<GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://instagram.com/mandalu30" onClick={e => e.preventDefault()}>
                    <img src={amanda} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Amanda Graziosi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Recovery Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Amanda is  currently pursuing my Master’s Degree in Business Administration at University of Houston Clear Lake.
                  She is responsible for leading and executing the recovery system of the rocket.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

<GridItem xs={12} sm={3} md={3}>
<Card profile plain>
  <CardAvatar profile plain>
    <a href="https://www.linkedin.com/in/rafael-gonzalez-097816131/" onClick={e => e.preventDefault()}>
      <img src={ralph} alt="..." className={classes.img} />
    </a>
  </CardAvatar>
  <CardBody>
    <h4 className={classes.cardTitle}>Rafael Gonzalez</h4>
    <Muted>
      <h6 className={classes.cardCategory}>Airframe Lead</h6>
    </Muted>
    <p className={classes.description}>
    Rafael is a senior at The Citadel The Military College of South Carolina, majoring Mechanical Engineering. Rafael is extremely passionate about sports and bodybuilding. 
    </p>
  </CardBody>
  <CardFooter profile className={classes.justifyContent}>
    <Button
      href="https://www.linkedin.com/in/rafael-gonzalez-097816131/"
      justIcon
      simple
      color="linkedin"
      className={classes.btn}
      onClick={e => e.preventDefault()}
    >
      <i className="fab fa-linkedin" />
    </Button>
  </CardFooter>
</Card>
</GridItem>


<GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={noah} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Noah Vasquez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Flight & Launch Operations </h6>
                  </Muted>
                  <p className={classes.description}>
                  Noah is majoring in Mechanical Engineering at University of Houston. 
                  He is currently interning with LZ Technology as an Engineering Technician 
                  with experience as an OCC specialist. Noah is interested in the space program 
                  and he is also passionate about cars and flights.

                  </p>
                </CardBody>
              </Card>
            </GridItem>