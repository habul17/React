import React from 'react';
import ReactDOM from 'react-dom/client'

const Title = () => (
    <h1 className="Head" tabIndex="1">
        Mastering-React 🚀
    </h1>
)


const HeadingComponent = () => (
    <div id='container'>
        <Title />
        <h1 className='heading'>This is from react component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
