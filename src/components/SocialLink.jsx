export default function SocialLink({ svg, link }) {
   return (
        <a href={link} className="mr-4 hover:opacity-45 transition-opacity duration-300">
            {svg}
        </a>
   ) 
}