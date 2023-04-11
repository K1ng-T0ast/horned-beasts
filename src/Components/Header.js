import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 style={{ textAlign: 'center', fontSize: '50px', marginTop: '1.2em', marginBottom: '1.3em' }}>{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;