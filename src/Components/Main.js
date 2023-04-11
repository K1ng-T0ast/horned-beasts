import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


class Main extends React.Component {
    render() {
        const beastImgs = this.props.ImageUrls;

        return (
            <div>
                <h2>{this.props.heading}</h2>
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

class BeastData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "status": "Nay",
        }
    }

    handleClick = () => {

        const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";

        this.setState({
            status: newStatus
        });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <Image src={this.props.image_url} alt='a random horned beast' rounded fluid />
                <h3>{this.state.status}</h3>
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