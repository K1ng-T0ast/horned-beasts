import React from 'react';

class Header extends React.Component {
    render() {
        return <h1>{this.props.pageTitle}</h1>;
    }
}

export default Header;