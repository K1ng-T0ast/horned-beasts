import React from "react";
import '../App.css'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FaHeart } from 'react-icons/fa';

class BeastData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0,
            showModal: false,
        }
    }

    handleClick = () => {

        this.setState((oldState) => ({
            favorites: oldState.favorites + 1,
        }));
    }

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false })
    };

    render() {
        return (
            <div>
                <Card onClick={this.handleClick} style={{ marginBottom: '1rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt='random horned beast' className="cardImage" />
                    <Card.Body>
                        <Card.Title>
                            <FaHeart /> {this.state.favorites} Likes
                        </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='primary' onClick={this.handleShowModal}>View Description of Beast
                        </Button>
                    </Card.Footer>
                </Card>
                <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.image_url} alt='random horned beast' className="modalImage" />
                        <p className="modalDescription">{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Back To Beast Gallery
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default BeastData;