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
                                 <br></br>
                                    MANAGEMENT
                                </h2>

                                <p>
                                Welcome to the Manage Portal! This exclusive page is designed to give educators full control over the games 
                                they use in the classroom. Through this portal, teachers can easily manipulate access codes and customize 
                                the in-game content. Whether it's adjusting which items appear or setting specific parameters for student engagement, 
                                this tool provides the flexibility to tailor the game experience to best suit your teaching needs.
                                </p> 
                                
                                <p> Customizable access codes allow educators to securely manage and assign codes for student participation, ensuring organized and secure access to the learning platform. 
                                    Game item controls provide the flexibility to adjust and select which items, challenges, or features are visible within the game, enabling a dynamic and tailored learning environment. 
                                    Additionally, teacher-only access ensures that only authorized educators can modify game settings, maintaining a secure and focused experience for both teachers and students </p>

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
