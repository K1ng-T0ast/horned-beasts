import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';


class Main extends React.Component {
    render() {
        const ImageUrls = this.props.ImageUrls;

        return (
            <div>
                <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '1.9em' }}>{this.props.heading}</h2>
                <Container>
                    <Row>
                        {ImageUrls.map((url, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <BeastData
                                    image_url={url.image_url}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}


export class BeastData extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0,
            // "status": "Nay",
        }
    }
    
    handleClick = () => {
        
        // const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";
        
        this.setState((oldState) => ({
            favorites: oldState.favorites + 1,
        }));
    }
    
    render() {
        return (
            <div onClick={this.handleClick}>
                <Image src={this.props.image_url} alt='a random horned beast' rounded fluid />
                <div>
                    <FaHeart /> {this.state.favorites} Favorites
                </div>
            </div>
        );
    }
}


export default Main;

// <Row>
//     <Col>
//         <BeastData image_url={beastImgs[0].image_url} />
//     </Col>
//     <Col>
//         <BeastData image_url={beastImgs[1].image_url} />
//     </Col>
//     <Col>
//         <BeastData image_url={beastImgs[2].image_url} />
//     </Col>
// </Row>
// <Row>
//     <Col>
//         <BeastData image_url={beastImgs[3].image_url} />
//     </Col>
//     <Col>
//         <BeastData image_url={beastImgs[4].image_url} />
//     </Col>
//     <Col>
//         <BeastData image_url={beastImgs[5].image_url} />
//     </Col>
// </Row>


