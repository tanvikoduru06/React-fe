import React from 'react'
import './App.css'
import {Container, Row, Col} from 'react-grid-system'

class Form extends React.Component {
  state = {
    city: '',
    locality: '',
    tutor: '',
  }
  render() {
    return (
      <Container className="form">
        <Row>
          <Col md={12}>
            <div className="form">
              <form>
                <input
                  placeholder="city"
                  value={this.state.city}
                  onChange={e => this.setState({city: e.target.value})}
                />

                <input
                  placeholder="Locality"
                  value={this.state.locality}
                  onChange={e => this.setState({locality: e.target.value})}
                />

                <input
                  placeholder="tutor required for"
                  value={this.state.tutor}
                  onChange={e => this.setState({tutor: e.target.value})}
                />
                <button
                  onClick={() => this.onSubmit()}
                  className="btn btn-danger"
                >
                  Book Your First Class{' '}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Form
