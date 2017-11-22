import { Component } from 'react'

import Navigation from '../components/navigation'

class TestPage extends Component {

    static async getInitialProps() {    
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        return {
            title: 'test'
        }
    }

    render() {

        const { title } = this.props

        return (
            <div>
                <Navigation />
                <h1>{title}</h1>

            </div>
        )
    }

}

export default TestPage
