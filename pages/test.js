import { Component } from 'react'

import Layout from '../components/layout'

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
            <Layout>
                
                <h1>{title}</h1>

            </Layout>
        )
    }

}

export default TestPage
