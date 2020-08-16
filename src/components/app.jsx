import React from 'react'
import Todos from './todos'
import {Container,Row,Col} from 'reactstrap';
class App extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Todos/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App
