import { Component } from 'react'

import Link from 'next/link'

class Navigation extends Component {

    render() {

        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Index</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/test">
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
