import { Component } from 'react'

import Navigation from './navigation'

class Layout extends Component {

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
