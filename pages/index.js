import { Component } from 'react'
import 'isomorphic-unfetch'


import Navigation from '../components/navigation'
import { setTimeout } from 'timers';

class IndexPage extends Component {

    static async getInitialProps() {
        // eslint-disable-next-line no-undef
        const res = await fetch('https://api.github.com/repos/developit/preact').then(data => {
            // console.log(data)
            return data
        })
        const json = await res.json()
        return { stars: json.stargazers_count }
    }

    constructor(props) {

        super(props)

        this.state = {
            title: 'Test title'
        }

        this.change = this.change.bind(this)
    }

    change() {
        this.setState({
            title: 'something changed'
        })
    }

    render() {

        const { title } = this.state
        const { stars } = this.props

        return (
            <div>
                <Navigation />
                <h1>{title}</h1>
                <button onClick={this.change}>Change</button>

                <div>
                    Stars: {stars}
                </div>
            </div>
        )
    }

}

export default IndexPage
