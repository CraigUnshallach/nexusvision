import React from "react";

import "./News.css";
import Dog from './dogs.png';
import Team3 from './team3.jpg';
import Team6 from './team6.jpg';
import Dream from './dreamcreator.jpg';
import Trader from './trader.jpg';
import Code from './coding.jpg';

function News() {
    
    return (
        <main>
            <h1 className="news-title-h1">NEWS</h1>
            <div className="news-container">
                <div className="news-element">
                    <img src={Dog} className="team1-img" alt="Dog"/>
                    <h3 className="news-title">
                        NexusVision gibt Entwicklung von neuem Produkt "Dog Royale" bekannt
                    </h3>
                    <p className="news-info">
                        Okt 10, 2023 | Ankündigung, Pressemeldung

                    </p>

                </div>
                <div className="news-element">
                    <img src={Team3} className="team1-img" alt="Team"/>
                    <h3 className="news-title">
                    NexusVision präsentiert auf der VR-Expo 2023
                    </h3>
                    <p className="news-info">
                        Dez 13, 2023 | Messe, Präsentation

                    </p>

                </div>
                <div className="news-element">
                    <img src={Dream} className="team1-img" alt="Team"/>
                    <h3 className="news-title">
                    DreamScape Creator 2.0 auf der Kreativitätsmesse
                    </h3>
                    <p className="news-info">
                        Dez 16, 2023 | Messe, Pressemeldung

                    </p>

                </div>
                <div className="news-element">
                    <img src={Trader} className="team1-img" alt="Team"/>
                    <h3 className="news-title">
                    Galactic Trader Tycoon auf der Gaming-Expo 2024
                    </h3>
                    <p className="news-info">
                        Jan 5, 2024 | Vorstellung, Prototype

                    </p>

                </div>
                <div className="news-element">
                    <img src={Code} className="team1-img" alt="Team"/>
                    <h3 className="news-title">
                    CodeMaster Challenge Finals
                    </h3>
                    <p className="news-info">
                        Jan 20, 2024 | Challenge, Invitational

                    </p>

                </div>
                <div className="news-element">
                    <img src={Team6} className="team1-img" alt="Team"/>
                    <h3 className="news-title">
                    NexusVision bei der Innovationsmesse 2024
                    </h3>
                    <p className="news-info">
                        Jan 22, 2024 | Messe, Präsentation

                    </p>

                </div>

            </div>
            <div className="news-container2">
                <p className="page-count">1</p>
                <p className="page-count">2</p>
                <p className="page-count">3</p>
                <p className="page-count">4</p>
                <p className="page-count">Weiter</p>
            </div>

        </main>
    )
}

export default News;