import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
    state ={
        username: "",
        password: ""
    }

    render() {
        return(
            <>
                <h2>Sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            name="username"
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="sumbit">Sign up</button>
                    </div>
                </form>
            </>
        )
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }
     
    handleSubmit = event => {
        event.preventDefault()

        const endpoint = 'http://localhost:3300/api/register'

        axios.post(endpoint, this.state)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('jwt', res.data.token)

                this.props.history.push('/users')
            })  
            .catch(error => console.log(error))
    }
}

export default Signup