export default function AboutCard({ head, text }) {
    return (
        <div className="section relative mb-[60px] max-md:mb-10 max-md:text-center max-md:w-4/5 max-md:mx-auto">
            <h3 className="mb-4 font-[Roboto Serif] font-medium">
                {head}
            </h3>
            <p className="opacity-65 font-medium font-[Roboto] text-xs">
                {text}
            </p>
        </div>
    )
}