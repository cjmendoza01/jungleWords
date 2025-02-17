import React, { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import "./Manage.css";
import accessCodeImage from "../assets/buttons&dialogues/accessCode.png";
import doneButton from "../assets/buttons&dialogues/done.png";

function Manage() {
    const correctPassword = "SanDiegoJW2025"; // Permanent password
    const [showAccessCodeInput, setShowAccessCodeInput] = useState(true);
    const [accessCode, setAccessCode] = useState("");
    const [attempts, setAttempts] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user already authenticated during this session
        const isAuthenticated = sessionStorage.getItem("isAuthenticated");
        if (isAuthenticated === "true") {
            setShowAccessCodeInput(false);
        }
    }, []);

    const checkAccessCode = () => {
        if (accessCode === correctPassword) {
            sessionStorage.setItem("isAuthenticated", "true"); // Store authentication
            setShowAccessCodeInput(false);
        } else {
            setAttempts(attempts - 1);
            if (attempts - 1 === 0) {
                alert("Too many failed attempts! Redirecting to the main page.");
                sessionStorage.removeItem("isAuthenticated"); // Ensure it's locked again
                navigate("/"); // Redirects to main page
            } else {
                alert(`Incorrect password. ${attempts - 1} attempts left.`);
            }
        }
    };

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
                            <a href="/" className="home-linkz" onClick={() => sessionStorage.removeItem("isAuthenticated")}>
                                <img src="/home.png" alt="Home" />
                            </a>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="jungle-background-sped">
                        <div className="contents_spec_ed">
                            
                            {/* Access Code Popup */}
                            {showAccessCodeInput && (
                                <div className="accesss-code-container">
                                    <img
                                        src={accessCodeImage}
                                        alt="Access Code"
                                        className="accesss-code-image"
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            width: "40%",
                                            top: "55%",
                                            left: "50%",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <div style={{ width: "100%", position: "relative" }}>
                                            <input
                                                type="password"
                                                value={accessCode}
                                                onChange={(e) => setAccessCode(e.target.value)}
                                                className="accesss-code-input2"
                                                placeholder="Enter Access Code"
                                            />
                                        </div>
                                    </div>
                                    <button onClick={checkAccessCode} className="doness-button-overlay">
                                        <img src={doneButton} alt="Done" />
                                    </button>
                                </div>
                            )}

                            {/* Only show content if authenticated */}
                            {!showAccessCodeInput && (
                                <>
                                    <div className="text-content">
                                        <h2>
                                            <br />
                                            MANAGEMENT
                                        </h2>

                                        <p>
                                            Welcome to the Manage Portal! This exclusive page is designed to give educators full control over the games
                                            they use in the classroom. Through this portal, teachers can easily manipulate access codes and customize
                                            the in-game content. Whether it's adjusting which items appear or setting specific parameters for student engagement,
                                            this tool provides the flexibility to tailor the game experience to best suit your teaching needs.
                                        </p>

                                        <p>
                                            Customizable access codes allow educators to securely manage and assign codes for student participation, ensuring organized and secure access to the learning platform.
                                            Game item controls provide the flexibility to adjust and select which items, challenges, or features are visible within the game, enabling a dynamic and tailored learning environment.
                                            Additionally, teacher-only access ensures that only authorized educators can modify game settings, maintaining a secure and focused experience for both teachers and students.
                                        </p>

                                        <p>By using this portal, teachers can create a more personalized, interactive, and effective gaming experience for their students.</p>
                                    </div>

                                    <div className="image-row">
                                        <Link to="/AccessCodeCharacter">
                                            <button className="image-button">
                                                <img src="/access.png" alt="Access Code" className="button-image" />
                                            </button>
                                        </Link>
                                        <Link to="/ItemManagementG1">
                                            <button className="image-button">
                                                <img src="/item.png" alt="Item" className="button-image" />
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}

                            <br /> <br /> <br /> <br /> <br /> <br />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Manage;
