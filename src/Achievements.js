import React from 'react'
import {Container, Row, Col} from 'react-grid-system'

function Achievements() {
  return (
    <Container className="achievements">
      <Row>
        <Col sm={4}>
          <Row>
            <Col>
              <h5>21706</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Tutors</p>
            </Col>
          </Row>
        </Col>

        <Col sm={4}>
          <Row>
            <Col>
              <h5>9218</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Tuitions</p>
            </Col>
          </Row>
        </Col>

        <Col sm={4}>
          <Row>
            <Col>
              <h5>221232</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Hours</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Achievements
