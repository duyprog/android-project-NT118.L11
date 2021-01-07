// import React, { Component } from 'react';
// import { fetchStaff } from '../redux/actions/staffActions';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// class Users extends Component {
//     componentDidMount(){
//     this.props.fetchStaff();
//     console.log(this.props.staff);
//     }
// }

// Users.propTypes = {
//     fetchStaff: PropTypes.func.isRequired,
//     staff: PropTypes.array.isRequired,
//     token: PropTypes.string.isRequired,
// }

// const mapStateToProps = state =>{
//     return{
//         staff: state.staffReducer.staffData.staff,
//         userToken: state.staffReducer.staffData.userToken
//     };
// }
// export default connect(mapStateToProps, {fetchStaff}) (Users);

export default Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'user1', 
        password: 'password', 
        userToken: 'token123'
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: 'user2', 
        password: 'pass1234', 
        userToken: 'token12345'
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'testuser', 
        password: 'testpass', 
        userToken: 'testtoken'
    },
];

