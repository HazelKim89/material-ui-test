import React from 'react'
import { Container, Row, Col, Img } from 'react-materialize'
import main2 from './images/main2.jpg'
import main3 from './images/main3.jpg'
import main4 from './images/main4.jpg'

class Movement extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col s={6}><img src={main2} className="line1 responsive-img" /></Col>
          <Col s={6}><img src={main3} className="line1 responsive-img" /></Col>
          <Col s={12}><img src={main4} className="line2 responsive-img" style={{opacity: 0}} /></Col>
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    const line1 = document.getElementsByClassName('line1')
    const line2 = document.getElementsByClassName('line2')
    const line3 = document.getElementsByClassName('line3')
    window.addEventListener('scroll', () => {
      var calValue = window.scrollY
      line1[0].setAttribute('style','transform: translateX(-'+calValue+'px); opacity: '+(1-(calValue/800)))
      line1[1].setAttribute('style','transform: translateX('+calValue+'px); opacity: '+(1-(calValue/800)))
      // line1[0].setAttribute('style','opacity: '+(1-(calValue/500)))
      console.log(calValue)
      line2[0].setAttribute('style','transform: translateY('+(400-calValue)+'px)')
      line2[0].setAttribute('style','opacity: '+(calValue/500))

    })
  }
}
export default Movement