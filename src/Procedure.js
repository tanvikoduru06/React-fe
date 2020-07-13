import React from 'react'
import phone4 from './image/phone4.PNG'
import icon1 from './image/icon1.PNG'
import icon2 from './image/icon2.PNG'
import icon3 from './image/icon3.PNG'
import icon4 from './image/icon4.PNG'
import icon5 from './image/icon5.PNG'
import icon6 from './image/icon6.PNG'
import {Container, Row, Col} from 'react-grid-system'

function Procedure() {
  return (
    <div>
      <Container className="tuitions">
        <Row>
          <Col md={12}>
            <h2>Search Home Tuitions in Your City</h2>
          </Col>
        </Row>
      </Container>
      <br />

      <Container className="icons">
        <Row>
          <Col sm={4}>
            <Row>
              <Col>
                <img src={icon1} alt="error" />
                <h6>
                  <b>Download The Qriyo App</b>
                </h6>
                <p>One stop solution to all your home tuition needs</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <img src={icon2} alt="err" />
                <h6>
                  <b>Answer The Quick Questions</b>
                </h6>
                <p>
                  Let us know what you need our matchmaking algorithm will
                  provide one perfect tutor within 24 hours{' '}
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <img src={icon3} alt="err" />
                <h6>
                  <b>One Perfect Tutor Is Matched</b>
                </h6>
                <p>
                  No need of browsing endless profiles, No hassle, No haggle,
                  Read about the tutor matched & confirm for first class
                </p>
              </Col>
            </Row>
          </Col>

          <Col sm={4}>
            <Row>
              <Col>
                <img src={phone4} alt="err" />
              </Col>
            </Row>
          </Col>

          <Col sm={4}>
            <Row>
              <Col>
                <img src={icon4} alt="err" />
                <h6>
                  <b>Schedule A First Class</b>
                </h6>
                <p>
                  Schedule a first class with tutor and start learning today
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <img src={icon5} alt="err" />
                <h6>
                  <b>Start Learning</b>
                </h6>
                <p>
                  We take pride in 97% satisfaction rate, still if you are not
                  happy with tutor we will rematch
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <img src={icon6} alt="err" />
                <h6>
                  <b>Support And Tracking</b>
                </h6>
                <p>
                  Track your progress,regular attendance using our mobile app
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Procedure
