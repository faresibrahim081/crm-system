function ProjectDetails({ title, icon, content, index }) {
    const bgColors = ["bg-gray-500", "bg-yellow-600", "bg-green-500"];
    const bgColor = bgColors[index % bgColors.length];
  return (
    <div className="flex flex-col gap-4 items-end bg-black rounded-2xl p-10">
      <h3 className=" bg-green-600 p-4 rounded-full">{icon}</h3>
      <h4 className="text-xl font-bold">{title} </h4>
      <p className={`text-gray-200 p-2 rounded ${bgColor}`}>{content}</p>
    </div>
  );
}

export default ProjectDetails;
