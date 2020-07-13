import React from 'react'
import Form from './Form'
import {Container, Row, Col} from 'react-grid-system'
import {useScreenClass} from 'react-grid-system'
import Achievements from './Achievements'

function App1() {
  const screenClass = useScreenClass()
  return (
    <div className="main">
      <Container>
        <Row justify-conternt-around>
          <Col md={12}>
            <h1>India's First Managed </h1>
            <h2>Home Tuition App</h2>
            <p
              style={{
                fontSize: ['lg'].includes(screenClass) ? '2rem' : '1rem',
              }}
            >
              One-on-one learning now made easy with the best tutors at your
              doorstep
            </p>
          </Col>
        </Row>
      </Container>
      <Form />
      <Container className="button">
        <Row>
          <Col md={12}>
            <button type="button" class="btn btn-outline-dark">
              Watch Video
            </button>
          </Col>
        </Row>
      </Container>
      <hr className="mx-5" />
      <Container>
        <Row>
          <Col md={12}>
            <p>What we have done so far</p>
          </Col>
        </Row>
      </Container>
      <Achievements />
    </div>
  )
}
export default App1
