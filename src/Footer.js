import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer>Created by {this.props.creator}</footer>
    }
}

export default Footer;