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
        <div>
            <FontAwesomeIcon icon={socialMediaIcons[socialMediaIcon]} size="2x" color="black" className="m-2 p-3 rounded-circle border border-black"/>
        </div>
    )
}

export default SocialButton;