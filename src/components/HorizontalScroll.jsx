export default function HorizontalScroll({ projects }) {
  return (
    <div className="w-full overflow-x-auto flex space-x-4 px-4 scrollbar-hide">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-[90vw] flex-shrink-0 space-y-4 p-4 rounded-xl backdrop-blur-md"
        >
          <img src={project.imageURL} alt={project.head} className="w-full h-52 object-cover mb-3 rounded-lg" />
          <h2 className="text-white font-bold text-lg mb-2">{project.head}</h2>
          <p className="text-white text-sm mb-3">{project.text}</p>
          <a href={project.link} className="text-blue-300 underline text-sm">View Project</a>
        </div>
      ))}
    </div>
  );
}
