import React from 'react'

import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            passColor: 'red',
        }
    }

    // handle input change
    changeHandler = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.name]: evt.target.value,
        }, () => {
            // check length of password and set passColor state to green if 8+ characters
            let passLength = this.state.password.length
            console.log(passLength)
            let newPassColor = 'red'
            if (passLength >= 8) {
                newPassColor = 'green'
            }
            this.setState({
                passColor: newPassColor
            })
        })
        
    }

    render() {
        return (
            <div className='Register'>
                <h2 className='welcome'>Welcome to Food-Stuff!</h2>
                <h4 className='registerIntro'>Please create a username and password to get started.</h4>
                <form className='registerForm'>
                    <div className='registerInputContainer'>
                        <label className='registerLabel' to='username'>Username</label>
                        <input className='registerInput' type='text' id='username' name='username' required />
                    </div>
                    <div className='registerInputContainer'>
                        <label className='registerLabel' to='password'>Password</label>
                        <input className='registerInput' type='text' id='password' name='password' minLength='8' required onChange={this.changeHandler} />
                        <h6 className='passwordRequirement' style={{color: this.state.passColor}}>* Password must contain 8 characters</h6>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register