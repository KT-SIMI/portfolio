import React from "react";

export default function SocialLink({ svg, link, className }) {
   return (
        <a href={link} className="mr-4 hover:opacity-45 max-md:mr-2 transition-opacity duration-300">
            {React.cloneElement(svg, { className })}
        </a>
   ) 
}