export default function Input({ type, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full h-[60px] max-md:h-[50px] max-md:rounded-[12px] px-5 py-3 bg-transparent border-1 rounded-[20px] border-white/40 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 placeholder:text-white/35"
        />
    )
}