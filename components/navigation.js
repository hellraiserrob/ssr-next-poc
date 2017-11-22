import { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import Head  from './head'

class Navigation extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isLoading: false
        }

        // Router.onRouteChangeStart = (url) => {
        //     console.log(`Loading: ${url}`)
        // }
        // Router.onRouteChangeComplete = () => {
        //     console.log('loading finish')
        // }
        // Router.onRouteChangeError = () => {
        //     console.log('loading error')

        // }

        this.changeStart = this.changeStart.bind(this)
        this.changeComplete = this.changeComplete.bind(this)
     
        Router.onRouteChangeStart = this.changeStart
        Router.onRouteChangeComplete = this.changeComplete
        Router.onRouteChangeError = this.changeComplete


    }

    changeStart(url){
        console.log(`logged ${url}`)
        this.setState({
            isLoading: true
        })
    }
 
    changeComplete(){
        console.log('change complete/error')
        this.setState({
            isLoading: false
        })
    }

    render() {

        const { isLoading } = this.state

        return (
            <header>

                <Head />

                <style jsx>{`
                    header {
                        
                    }

                    .loading {
                        position: fixed;
                        content: "";
                        top:0;
                        left:0;
                        right:0;
                        height: 2px;
                        background: blue;

                        transition: all ease 0.5s;
                        animation: loading 1s infinite

                    }

                    @keyframes loading {
                        0% {
                            right: 100%;
                        }
                        100% {
                            right: 0
                        }
                    }

                    ul {
                        padding:0;
                        margin:0;
                        list-style: none;
                    }

                `}</style>

                {isLoading && <div className="loading"></div>}

                <nav>
                    <ul>
                        <li>
                            <Link href="/" prefetch>
                                <a>Index</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/test" prefetch>
                                <a>Test</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }

}

export default Navigation
