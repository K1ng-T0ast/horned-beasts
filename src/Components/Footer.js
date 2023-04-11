import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h3 style={{ textAlign: 'center', fontSize: '35px', marginTop: '2em'}}>{this.props.farewell}</h3>
            </footer>
        );
    }
}

export default Footer;