import React from "react";
import Team from './team.jpg';
import Team2 from './team2.PNG';
import "./About.css";

function About() {
    
    return (
        <main>
            <h1 className="about-title">NEXUSVISION<br></br> </h1>
            <h2 className="about-title-h2">EINE REISE DURCH DIE FIRMENGESCHICHTE (2018 - 2023)
                </h2>
            <div className="media-container">
                <div className="triangle">
                </div>
                <div className="title-img-container">
                    <h2 className="about-title-h2-second">TEAM: ENTWICKLER
                    </h2>
                    
                </div>
            </div>
            <div className="about-container">
            
                <img src={Team} className="team-img" alt="Team"/>
                <p className="about-text">
                
Im Jahr 2018 begann die faszinierende Reise von NexusVision, als sich die Wege von elf engagierten Informatikstudenten während eines gemeinsamen Sommerpraktikums kreuzten. Max Schneider, Lena Becker und ihre neun Mitgründer erkannten nicht nur die gemeinsame Liebe zur Softwareentwicklung, sondern auch das Potenzial, etwas Bahnbrechendes zu schaffen.
<br></br>Gestärkt durch die inspirierende Zusammenarbeit während des Praktikums gründeten sie im Anschluss NexusVision. Mit dem klaren Ziel, innovative Softwarelösungen zu entwickeln, begann das Team seine Reise in die Welt der Technologie.
<br></br><br></br>Die ersten Jahre waren von harter Arbeit, kreativen Durchbrüchen und bescheidenen Anfängen geprägt. Doch bereits 2020 erzielte NexusVision seinen ersten bedeutenden Erfolg mit der Veröffentlichung von "DreamScape Creator". Die kreative Software erfreute sich schnell großer Beliebtheit und legte den Grundstein für das Wachstum des Unternehmens.
                </p>

            <img src={Team2} className="team-img2" alt="Team2"/>
            </div>
            
            <div className="about-container2">
                <p className="about-text2">
                <br></br><br></br>Der Erfolg setzte sich 2023 fort, als NexusVision auf einer Messe die Grundsteine für sein neuestes Produkt, "<i>Dog Royale</i>", legte. Durch die Vorstellung von Softwarekomponenten und dem Erwerb einer vielversprechenden Technologie auf dieser Veranstaltung wurde die Entwicklung von "Dog Royale" eingeleitet.
<br></br><br></br>Mit der Veröffentlichung von "<i>Galactic Trader Tycoon</i>" im Jahr 2022 etablierte sich NexusVision weiterhin als Innovator in der Gaming-Branche. Das Spiel erfreute sich weltweit großer Beliebtheit und trug dazu bei, das Team von NexusVision weiter zu vergrößern.
<br></br><br></br>Die Erfolgsgeschichte setzte sich bis 2023 fort
2021 wurde mit "<i>MindMaze: Reality Twister</i>" ein weiteres innovatives Spiel veröffentlicht, das durch Gedankenkontrolle gesteuert wird.
<br></br><br></br>
Von einem gemeinsamen Praktikum vor fünf Jahren bis 2023 hat NexusVision eine beeindruckende Reise zurückgelegt und steht weiterhin als Symbol für Innovation, Zusammenarbeit und den unermüdlichen Drang, die Grenzen der Technologie zu erweitern.

                </p>
            </div>    
        </main>
    )
}

export default About;