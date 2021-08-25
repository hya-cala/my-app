import React, { Component } from 'react';
import './todoapp.css'

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr />
                <footer className='footer'>
                    <span className='text-muted'>
                        Copyright
                    </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;