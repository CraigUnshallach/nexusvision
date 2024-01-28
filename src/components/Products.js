import React from "react";

import "./Products.css"
import Dog from './dogs.png';
import Quantum from './quantum.png';
import Dreamscaper from './dreamscaper.png';
import Codingchallenge from './codingchallenge.png';
import Strat from './strat.png';
import Mind from './mind.png';

function Products() {
    
    return (
        <main>
            <h1 className="produkte-title">PRODUKTE</h1>
            <div className="produkt-container1">
                <div className="produktimg-container">

                    <img src={Dog} className="produkt-img" alt="Produkt"/>
                </div>
                <div className="produkttext-container">
                    <div className="produkt-title-container">
                        <h3 className="produkt-title-h3">
                        Dog Royale
                        </h3>
                    </div>
                    <div className="produkt-text-container">
                        <p className="produkt-info1">
                        Dog ist eine fesselnde Mischung aus Strategie und Glück. Inspiriert von klassischen Pachisi-Elementen, fordert Dog die Spieler heraus, ihre Spielsteine sicher in die Mitte des Spielbretts zu bringen.
                         Mit Karten, die das Spielgeschehen beeinflussen, und dem Würfel als treuem Begleiter, müssen die Spieler taktische Entscheidungen treffen, um ihre eigenen Figuren vor den Gegnern zu schützen und gleichzeitig den Weg zur Mitte zu ebnen.
                        Dog zeichnet sich durch einfache Regeln und dennoch anspruchsvolles Gameplay aus, was es zu einem beliebten Familien- und Strategiespiel macht.

                        </p>
                    </div>
                </div>

            </div>

            <div className="produkt-container-switch">
                
                <div className="produkttext-container-switch">
                    <div className="produkt-title-container">
                        <h3 className="produkt-title-h3">
                        Quantum Quest: Time Explorer
                        </h3>
                    </div>
                    <div className="produkt-text-container">
                        <p className="produkt-info-switch">
                        Ein bahnbrechendes VR-Abenteuerspiel, das Spielern die einzigartige Möglichkeit bietet, durch die Zeit zu reisen und unvergessliche historische Ereignisse hautnah zu erleben. 
                        Die herausfordernde Mission besteht darin, komplexe Rätsel zu knacken und den Verlauf der Geschichte zu beeinflussen, ohne dabei das empfindliche Raum-Zeit-Kontinuum zu gefährden. 
                        Spieler werden in diesem innovativen Spiel dazu aufgefordert, ihre kognitiven Fähigkeiten zu nutzen, um Hindernisse zu überwinden und die Gewässer der Zeit sicher zu navigieren. 
                        Nur durch kluges Handeln können sie die Geheimnisse der Vergangenheit entschlüsseln und den Kurs der Geschichte nach ihren Vorstellungen gestalten.
                    
                        </p>
                    </div>                    
                </div>
                <div className="produktimg-container-switch">
                    <img src={Quantum} className="produkt-img-switch" alt="Produkt"/>
                </div>
            </div>

            <div className="produkt-container">
                <div className="produktimg-container">

                    <img src={Dreamscaper} className="produkt-img" alt="Produkt"/>
                </div>
                <div className="produkttext-container">
                    <div className="produkt-title-container">
                        <h3 className="produkt-title-h3">
                        DreamScape Creator
                        </h3>
                    </div>
                    <div className="produkt-text-container">
                        <p className="produkt-info">
                        Eine innovative Software, die kreativen Köpfen die Möglichkeit bietet, ihre Träume in immersive virtuelle Realitäten zu verwandeln. Durch benutzerfreundliche Tools können individuelle 
                        Traumlandschaften geschaffen und erkundet werden, um sie anschließend mit anderen zu teilen und gemeinsam zu erleben. Diese kreative Plattform ermöglicht es Nutzern, ihre Vorstellungen in die digitale Sphäre 
                        zu übertragen und somit einzigartige, virtuelle Welten zu erschaffen, die die Grenzen der Vorstellungskraft überschreiten. Mit dieser Software wird die Vision von individuellen Traumwelten zu einer interaktiven und gemeinschaftlichen Realität.

                        </p>
                    </div>
                </div>

            </div>
            <div className="produkt-container-switch">
                
                <div className="produkttext-container-switch">
                    <div className="produkt-title-container">
                        <h3 className="produkt-title-h3">
                        CodeMaster Challenge
                        </h3>
                    </div>
                    <div className="produkt-text-container">
                        <p className="produkt-info-switch">
                        Ein lehrreiches Spiel konzipiert für angehende Programmierer, welches eine interaktive Plattform bereitstellt, um vielfältige Programmiersprachen zu erlernen und zu meistern. 
                        Spieler haben die Möglichkeit, in Wettbewerben ihre Fähigkeiten zu demonstrieren und sich anspruchsvollen Coding-Herausforderungen zu stellen. Diese innovative Gaming-Umgebung fördert nicht nur das Verständnis von Programmiersprachen, 
                        sondern bietet auch eine spielerische Möglichkeit, praktische Fertigkeiten zu entwickeln. 
                        Spieler werden ermutigt, ihre Kenntnisse in einer dynamischen und herausfordernden Atmosphäre zu vertiefen, wodurch das Lernen zu einem unterhaltsamen Wettbewerb wird.
                        </p>
                    </div>                    
                </div>
                <div className="produktimg-container-switch">
                    <img src={Codingchallenge} className="produkt-img-switch" alt="Produkt"/>
                </div>
            </div>
            <div className="produkt-container">
                <div className="produktimg-container">

                    <img src={Strat} className="produkt-img" alt="Produkt"/>
                </div>
                <div className="produkttext-container">
                    <div className="produkt-title-container">
                        <h3 className="produkt-title-h3">
                        Galactic Trader Tycoon
                        </h3>
                    </div>
                    <div className="produkt-text-container">
                        <p className="produkt-info">
                        Ein fesselndes Strategiespiel, das es den Spielern ermöglicht, ihr eigenes intergalaktisches Handelsimperium zu errichten. In dieser anspruchsvollen Spielwelt erkunden sie neue Galaxien, handeln mit exotischen Ressourcen, 
                        etablieren Handelsrouten und setzen alles daran, ihre wirtschaftlichen Interessen gegen rivalisierende Weltraumunternehmen zu verteidigen. Durch geschicktes Management und kluge Entscheidungen in Bezug auf Ressourcen, 
                        Diplomatie und Militärstrategie können die Spieler ihr Handelsimperium ausbauen und zu einer dominanten Kraft in der interstellaren Wirtschaft werden.

                        </p>
                    </div>
                </div>

            </div>
            <div className="produkt-container-switch1">
                
                <div className="produkttext-container-switch">
                    <div className="produkt-title-container">
                        <h3 className="produkt-title-h3">
                        MindMaze: Reality Twister
                        </h3>
                    </div>
                    <div className="produkt-text-container">
                        <p className="produkt-info-switch">
                        Ein faszinierendes Puzzle-Abenteuerspiel, das auf der innovativen Mechanik der Gedankenkontrolle basiert. Spieler tauchen in eine surreale Welt ein und navigieren geschickt durch sie, indem sie ihre Gedanken und 
                        Emotionen gezielt steuern. Die Herausforderung besteht darin, mit der Umgebung zu interagieren und Rätsel zu lösen, indem sie ihre mentale Energie auf geschickte Weise einsetzen. Dieses einzigartige Spielkonzept 
                        eröffnet den Spielern eine neue Dimension der Herausforderung, bei der die Kontrolle über die eigenen Gedanken und Emotionen entscheidend für den Fortschritt in der fesselnden, surrealen Welt ist.
                        </p>
                    </div>                    
                </div>
                <div className="produktimg-container-switch">
                    <img src={Mind} className="produkt-img-switch" alt="Produkt"/>
                </div>
            </div>
           

        </main>
    )
}

export default Products;