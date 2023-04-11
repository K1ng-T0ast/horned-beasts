import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';


class Main extends React.Component {
    render() {
        const beastImgs = this.props.ImageUrls;

        // const backgroundStyle = {
        //     backgroundColor: '#f8f9fa',
        //     minHeight: '100vh',
        //     paddingTop: '20px,'
        // };

        return (
            <div>
                <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom:'1.9em'}}>{this.props.heading}</h2>
                <Container>
                    <Row>
                        <Col>
                            <BeastData image_url={beastImgs[0].image_url} />
                        </Col>
                        <Col>
                            <BeastData image_url={beastImgs[1].image_url} />
                        </Col>
                        <Col>
                            <BeastData image_url={beastImgs[2].image_url} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BeastData image_url={beastImgs[3].image_url} />
                        </Col>
                        <Col>
                            <BeastData image_url={beastImgs[4].image_url} />
                        </Col>
                        <Col>
                            <BeastData image_url={beastImgs[5].image_url} />
                        </Col>
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



// {beastData.map((data) => (
//     <HornedBeast
//         key={data._id}
//         title={data.title}
//         imageURL={data.image_url}
//         description={data.description}
//         horns={data.horns}