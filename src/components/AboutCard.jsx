export default function AboutCard({ head, text }) {
    return (
        <div className="section relative mb-[60px]">
            <h3 className="mb-4 font-[Roboto Serif] font-medium">
                {head}
            </h3>
            <p className="opacity-65 font-medium font-[Roboto] text-xs">
                {text}
            </p>
        </div>
    )
}