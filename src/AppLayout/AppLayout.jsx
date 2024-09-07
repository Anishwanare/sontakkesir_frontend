import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <Header />
                <WrappedComponent {...props} />
                <Footer/>
            </div>
        );
    };
};

export default AppLayout
