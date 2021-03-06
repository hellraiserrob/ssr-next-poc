import { Component } from 'react'
import 'isomorphic-unfetch'



// import { setTimeout } from 'timers';
import Layout from '../components/layout'


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

    componentDidMount() {

        console.log('componentDidMount')

        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .catch(err => {
                    console.error("Service worker registration failed", err)
                });

        } else {
            console.log("Service worker not supported");
        }
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
            <Layout>

                <h1>{title}</h1>
                <button onClick={this.change}>Change</button>

                <div>
                    Stars: {stars}
                </div>
            </Layout>
        )
    }

}

export default IndexPage
