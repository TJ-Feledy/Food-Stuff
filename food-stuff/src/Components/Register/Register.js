import React from 'react'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='Register'>
                <h4 className='welcome'>Welcome to Food-Stuff!</h4>
                <h5 className='registerIntro'>Please create a username and password to get started.</h5>
                <form className='registerForm'>
                    <label to='username'>Username</label>
                    <input type='text' id='username' name='username' required />
                    <label to='password'>Password</label>
                    <input type='text' id='password' name='password' required />
                </form>
            </div>
        )
    }
}

export default Register