import React from 'react'
import './homepage.css'
import { Container, Row, Col, Button } from 'reactstrap'

const Home = ({ classes }) => (
  <div
    style={{
      width: '100%',
      height: 'calc(100vh - 64px)',
      backgroundColor: 'black'
    }}>
    <Container className={'hundoheight'}>
      <Row className={'maxpheight'}>
        <Col md="6" className={'padding-0'}>
          <div className={[classes.quad1, 'quad'].join(' ')} />
        </Col>
        <Col md="6" className={'padding-0'}>
          <div className={[classes.quad3, 'quad'].join(' ')} />
        </Col>
      </Row>
      <Row>
        <Button className={'absbetween'} />
      </Row>
      <Row className={'maxpheight'}>
        <Col md="6" className={'padding-0'}>
          <div className={[classes.quad2, 'quad'].join(' ')} />
        </Col>
        <Col md="6" className={'padding-0'}>
          <div className={[classes.quad4, 'quad'].join(' ')} />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Home
