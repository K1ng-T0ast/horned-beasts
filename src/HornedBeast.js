import React from 'react';


class HornedBeast extends React.Component {
    render() {
        return <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.imageURL} alt={this.props.title} title={this.props.title} />
            <p>{this.props.description}</p>
            <p>Horns: {this.props.horns}</p>
            </div>
    }
}

export default HornedBeast;