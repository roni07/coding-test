import React from "react";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="image">
                <img src={require("../../images/web_design.jpg").default} alt="avatar"/>
            </div>

            <div className="banner">
                <h3>Advanced software made simple</h3>
                <p>Whether you are running a software company or SaaS, your landing page is the first impression among
                    your visitors. Whenever someone visits your website, the landing page is the first thing that they
                    notice.</p>
            </div>
        </div>
    );
}

export default Home;
