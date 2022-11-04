import React from "react";

const Description = () => {
    return(
        <div className="des-container">
            <h3>***User Name***</h3>
            <p>More than 1 word</p>
            <h3>***Password***</h3>
            <ul>
                <li>8 to 24 alphanumeric characters</li>
                <li>Arrowed symbol: "-",  "?",  "/",  "."</li>
            </ul>
        </div>
    )

};

export default Description;