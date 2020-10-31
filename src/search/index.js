import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <span className="app">Search Page</span>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root1'));
