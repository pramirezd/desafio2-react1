import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const socialMediaIcons = {
    facebook: faFacebook,
    github: faGithub,
    linkedin: faLinkedin,
};

function SocialButton({ socialMediaIcon }) {

    return (
        <div className="icon-container">
            <FontAwesomeIcon icon={socialMediaIcons[socialMediaIcon]} size="3x" color="black" />
        </div>
    )
}

export default SocialButton;