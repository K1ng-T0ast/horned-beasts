import React from 'react';

class Header extends React.Component {
    render() {
        return <h1>Created by {this.props.pageTitle}</h1>;
    }
}

export default Header;