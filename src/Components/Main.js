import React from "react";
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeastData from "./SelectedBeast";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        };
    }

    handleSearch = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    fuzzySearch = (str, query) => {
        const precise = query
            .split(',')
            .map((char) => `(?=.*${char})`)
            .join(',');
        const regularExpression = new RegExp(precise, 'g');
        return str.match(regularExpression);
    };

    render() {
        const ImageUrls = this.props.ImageUrls;
        const searchQuery = this.state.searchQuery;

        const filterImages = ImageUrls.filter((url) => {
            return (
                this.fuzzySearch(url.title, searchQuery) ||
                this.fuzzySearch(url.keyword, searchQuery)
            );
        });

        return (
            <div>
                <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '1.9em' }}>{this.props.heading}</h2>
                <div className="inputContainer">
                    <input className="inputBox"
                        type='text'
                        placeholder="Search beast by title or keyword"
                        value={this.state.searchQuery}
                        onChange={this.handleSearch}
                    />
                </div>
                <Container>
                    <Row>
                        {filterImages.map((url, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <BeastData
                                    image_url={url.image_url}
                                    description={url.description}
                                    title={url.title}
                                    keyword={url.keyword}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;