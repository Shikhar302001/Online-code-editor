import React from "react"; // Don't forget to import React
import Header from "./Header"; // Import the Header component
import Code from './Code'; // Import the Code component
import Result from "./Result";
const Home = () => {
    return (
        <>
            <Header />
            <Code />
            <Result/>
        </>
    );
};

export default Home;
