export default function Review({ text, imageURL, name, position }) {
  return (
    <div className="text-white/80 w-2/5 mx-auto flex flex-col items-center text-center font-[Roboto]">
      <p className="font-normal text-3xl mb-8">{`"${text}"`}</p>
      <img
        src={imageURL}
        alt="image"
        className="rounded-full h-[64px] w-[64px] mb-5"
      />
      <p className="font-bold text-lg">{name}</p>
      <p className="font-normal text-lg">{position}</p>
    </div>
  );
}
