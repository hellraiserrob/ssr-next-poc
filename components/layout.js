import { Component } from 'react'

import Navigation from './navigation'

class Layout extends Component {

    


    render() {

        const { children } = this.props

        return (
            <div className="layout">

                <h1>SSR App</h1>

                <hr />

                <Navigation />

                {children}

            </div>
        )
    }

}

export default Layout
