import React from 'react';
import ReactDOM from 'react-dom/client'


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src='https://image.similarpng.com/file/similarpng/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestuarantCard = () => {
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className='card-img' src='https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg'></img>
            <h3>HMR</h3>
            <h4>Indian, Biryani</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
                <RestuarantCard />
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
