export default function Project({ imageURL, head, text, link }) {
  return (
    <div className="flex flex-col items-center text-left space-y-4">
      <img
        className="w-full max-h-96 object-contain"
        src={imageURL}
        alt="Project Preview"
      />
      <h3 className="w-1/2 text-xl font-[Roboto Serif] font-bold text-white">{head}</h3>
      <p className="w-1/2 font-normal font-[Roboto] text-lg/[30px] text-white/90">{text}</p>
      <a
        href={link}
        className="w-1/2 block underline text-white hover:text-blue-400 hover:no-underline"
      >
        VIEW PROJECT
      </a>
    </div>
  );
}
