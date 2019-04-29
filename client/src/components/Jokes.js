import React from 'react'
import axios from 'axios'

import requireAuth from '../auth/requireAuth'

class Jokes extends React.Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        axios.get('/jokes').then(res => {
            console.log(res)
            this.setState({ jokes: res.data })
        })
    }

    render() {
        return(
            <div>
                <h2>List of Jokes</h2>

                {this.state.jokes.map(j => (
                    <p key={j.id}>JOKE: {j.joke}</p>
                ))}
            </div>
        )
    }
}

export default requireAuth(Jokes)