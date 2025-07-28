export default function Review({ text, imageURL, name, position }) {
  return (
    <div className="text-white/80 w-2/5 mx-auto flex flex-col items-center text-center font-[Roboto] max-md:w-full">
      <p className="font-normal text-3xl mb-8 max-md:text-lg">{`"${text}"`}</p>
      {/* <img
        src={imageURL}
        alt="image"
        className="rounded-full h-[64px] w-[64px] mb-5 max-md:w-12 max-md:h-12 max-md:mb-3"
      /> */}
      <p className="font-bold text-lg max-md:font-normal max-md:text-base">{name}</p>
      <p className="font-normal text-lg max-md:font-light max-md:text-base">{position}</p>
    </div>
  );
}
