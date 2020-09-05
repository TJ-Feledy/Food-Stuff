

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            passColor: 'red',
            displayButton: false,
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
            let newPassColor = 'red'
            if (passLength >= 8) {
                newPassColor = 'limegreen'
            }
            this.setState({
                passColor: newPassColor
            })

            // check that all fields are ready to submit and change displayButton accordingly
            if (this.state.username.length > 0 && this.state.password.length >= 8) {
                this.setState({
                    displayButton: true
                })
            }else {
                this.setState({
                    displayButton: false
                })
            }
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
                        <input className='registerInput' type='text' id='username' name='username' value={this.state.username} required onChange={this.changeHandler}/>
                    </div>
                    <div className='registerInputContainer'>
                        <label className='registerLabel' to='password'>Password</label>
                        <input className='registerInput' type='text' id='password' name='password' minLength='8' value={this.state.password} required onChange={this.changeHandler} />
                        <h6 className='passwordRequirement' style={{color: this.state.passColor}}>* Password must contain 8 characters</h6>
                    </div>
                    {this.state.displayButton ? <button className='submitButton'>Create Account</button> : null}
                </form>
            </div>
        )
    }
}

export default Register