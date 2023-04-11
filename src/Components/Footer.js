import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h3>{this.props.farewell}</h3>
            </footer>
        );
    }
}

export default Footer;