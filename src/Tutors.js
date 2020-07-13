import React from 'react'
import {Container, Row, Col} from 'react-grid-system'
// import icon7 from './image/icon7.PNG'
// import icon8 from './image/icon8.PNG'
// import icon9 from './image/icon9.PNG'
import {Card, /*CardImg*/ CardText, CardBody, CardTitle} from 'reactstrap'

function Tutors() {
  return (
    <div className="jumbotron">
      <Container>
        <Row>
          <Col md={12}>
            <h2 style={{textAlign: 'center', color: 'aqua'}}>
              Home Tutors For Academics
            </h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={4}>
            <Card style={{width: '300px', height: '150px'}}>
              {/* <CardImg style={{width: '10px'}} src={icon7} alt="img" /> */}
              <CardBody>
                <CardTitle>School Tuitions</CardTitle>
                <CardText>
                  {' '}
                  Get Home Tutors For KinderGarden To Class 12th
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col sm={4}>
            <Card style={{width: '300px', height: '150px'}}>
              {/* <CardImg top width="100%" src={icon8} alt="img" /> */}
              <CardBody>
                <CardTitle>Tutors For All Boards</CardTitle>
                <CardText>
                  {' '}
                  Get Home Tutors For CBSE, ICSE, IB, and State Board
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col sm={4}>
            <Card style={{width: '300px', height: '150px'}}>
              {/* <CardImg top width="100%" src={icon9} alt="img" /> */}
              <CardBody>
                <CardTitle>Tuitions For All Subjects</CardTitle>
                <CardText>
                  {' '}
                  Get Home Tutors For Maths, Science, English And More
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Container>
            <Row>
              <Col>
                <p style={{textAlign: 'center', fontSize: 'large'}}>
                  <b>
                    Do You Know 93% Kids Perform Better With Personalised
                    Attention?
                  </b>
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  )
}
export default Tutors
