import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Manage.css";

const DEFAULT_PASSWORD = "SanDiegoJW2025";

function getDynamicTeacherCode() {
    const now = new Date();
    const year = now.getFullYear();
    const minute = String(now.getMinutes()).padStart(2, "0");
    return `JW${year}${minute}`;
}


function Manage() {
    const [accessCode, setAccessCode] = useState("");
    const [teacherCode, setTeacherCode] = useState("");
    const [attempts, setAttempts] = useState(3);
    const [step, setStep] = useState("access"); // access, teacherCode, management
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem("isAuthenticated");
        if (isAuthenticated === "true") {
            setStep("management");
        }
    }, []);


      const handleAccessSubmit = () => {
        if (accessCode === DEFAULT_PASSWORD) {
            setAccessCode("");
            setStep("teacherCode");
        } else {
            const remaining = attempts - 1;
            setAttempts(remaining);
            if (remaining <= 0) {
                alert("Too many failed attempts! Redirecting to main page.");
                sessionStorage.removeItem("isAuthenticated");
                navigate("/");
            } else {
                alert(`Incorrect access code. ${remaining} attempts left.`);
            }
        }
    };

     const handleTeacherCodeSubmit = () => {
        const expectedCode = getDynamicTeacherCode();

        if (teacherCode === expectedCode) {
            sessionStorage.setItem("isAuthenticated", "true");
            setStep("management");
        } else {
            const remaining = attempts - 1;
            setAttempts(remaining);
            if (remaining <= 0) {
                alert("Too many failed attempts! Redirecting to main page.");
                sessionStorage.removeItem("isAuthenticated");
                navigate("/");
            } else {
                alert(`Incorrect teacher code. ${remaining} attempts left.`);
            }
        }
    };



    return (
        <div className="manage-container">
            <audio autoPlay loop src={"/BgMusic.mp3"} />

            <video className="video-background" autoPlay muted loop>
                <source src="/main.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <header>
                <nav>
                    
                    <div className="nav-linksz">
                        <a
                            href="/"
                            className="home-linkz"
                            onClick={() => sessionStorage.removeItem("isAuthenticated")}
                        >
                            <img src="/home.png" alt="Home" />
                        </a>
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <div className="contents_spec_ed">
                    {step === "access" && (         
                        <div className="accesss-code-container">
                            <h2>Enter Access Code</h2>
                            <input
                                type="password"
                                className="accesss-code-input2"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                placeholder="Access Code"
                            />
                            <button className="image-btn" onClick={handleAccessSubmit}>
                                <img src="/update.png" alt="Update" />
                            </button>
                        </div>
                    )}

                    {step === "teacherCode" && (
                        <div className="accesss-code-container">
                            <h2>Enter Teacher Code</h2>
                            <input
                                type="password"
                                className="accesss-code-input2"
                                value={teacherCode}
                                onChange={(e) => setTeacherCode(e.target.value)}
                                placeholder="Teacher Code"
                            />
                            <button className="image-btn" onClick={handleTeacherCodeSubmit}>
                                <img src="/done.png" alt="Done" />
                            </button>
                        </div>
                    )}

                    {step === "management" && (
                        <>
                            <div className="text-content">
                                <h2>MANAGEMENT</h2>
                                <p>
                                    Welcome to the Manage Portal! This exclusive page is designed to give educators full control over the games they use in the classroom.
                                    Through this portal, teachers can easily manipulate access codes and customize the in-game content.
                                </p>
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
                </div>
            </main>
        </div>
    );
}

export default Manage;
