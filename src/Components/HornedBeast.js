// import React from 'react';
// // import Image from 'react-bootstrap/Image'


// class HornedBeast extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             status: "Nay",
//         }
//     }

//     handleClick = () => {

//         const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";

//         this.setState({
//             status: newStatus
//         });
//     }

//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 <img src={this.props.image_url} alt='a random horned beast' rounded fluid />
//                 <h3>{this.state.status}</h3>
//             </div>
//         );
//     }
// }

// export default HornedBeast;