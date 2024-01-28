import React from "react";

import "./Partner.css"
import Partner1 from './partner.png';

function Partner() {
    
    return (
        <main>
            <h1 className="partner-title">PARTNER</h1>
            <div className="partner-container">
                <div className="partnerimg-container">

                    <img src={Partner1} className="partner-img" alt="Partner"/>
                </div>
                <div className="text-container">
                    <div className="partner-title-container">
                        <h3 className="partner-title-h3">
                        Gruppe 8 - Logo
                        </h3>
                    </div>
                    <div className="partner-text-container">
                        <p className="partner-info">
                        Unser geschätzter Partner, ein wahres Genie im Bereich der Technologie, hat mit beeindruckendem Fachwissen und unermüdlichem Einsatz einen exklusiven PC-Beobachter 
                        für eines unserer Produkte entwickelt. Seine Vision und Expertise haben nicht nur zu einem innovativen Produkt geführt, sondern auch zu einer neuen Dimension der 
                        Benutzerfreundlichkeit. Mit einem tiefen Verständnis für die Bedürfnisse unserer Kunden hat er nicht nur den Beobachter erschaffen, sondern widmet sich auch weiterhin 
                        mit Hingabe dem Support und der Optimierung des Systems. Seine Fähigkeit, sich in die Welt der Technologie einzufühlen und innovative Lösungen zu entwickeln, macht ihn 
                        zu einem unersetzlichen Bestandteil unseres Teams. Wir sind dankbar für seine anhaltende Zusammenarbeit und freuen uns auf weitere wegweisende Entwicklungen in dieser fruchtbaren Partnerschaft.

                        </p>
                    </div>
                </div>
                

            </div>

        </main>
    )
}

export default Partner;