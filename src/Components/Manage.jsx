import React from "react";
import "./Manage.css";

function Manage() {
    return (
        <div id="specEd">
            <div className="App">
                <header>
                    <audio autoPlay loop src={"/BgMusic.mp3"} />
                    <nav className="nav">
                        <div className="logo">
                            <img src="/Logo.png" alt="JW Logo" />
                        </div>
                        <div className="nav-linksz">
                            <a href="/" className="home-linkz">
                                <img src="/home.png" alt="Home" />
                            </a>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="jungle-background-sped">
                        <div className="contents_spec_ed">
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            ></div>
                            <div className="text-content">
                                <h2>
                                    <br></br> <br></br>
                                    MANAGEMENT
                                </h2>

                                <p>
                                Welcome to the Manage Portal! This exclusive page is designed to give educators full control over the games 
                                they use in the classroom. Through this portal, teachers can easily manipulate access codes and customize 
                                the in-game content. Whether it's adjusting which items appear or setting specific parameters for student engagement, 
                                this tool provides the flexibility to tailor the game experience to best suit your teaching needs.
                                </p> 

                                <p>- Customizable Access Codes: Securely manage and assign access codes for student participation.</p>
                                <p>- Game Item Controls: Adjust and select which items, challenges, or features are visible in the game, creating a dynamic and controlled learning environment. </p>
                                <p> - Teacher-Only Access: Ensure that only authorized educators can make adjustments to the game settings, keeping the experience secure and focused.</p>

                                <p>By using this portal, teachers can create a more personalized, interactive, and effective gaming experience for their students.</p>
                            </div>
                            {/* Add Image Row Below */}
                            <div className="image-row">
                                <img src="/access.png" alt="Access Code" />
                                <img src="/item.png" alt="Item" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Manage;
