import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Logo from '../assets/image/logo.jpg';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <span className="app">Logo</span>
                <img src={Logo} className="logo" alt="" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
