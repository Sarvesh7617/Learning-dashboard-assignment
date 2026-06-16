import { BookOpen, Code, LayoutDashboard, Sparkles } from "lucide-react";

const iconMap: Record<string, any> = {
  BookOpen,
  Code,
  LayoutDashboard,
  Sparkles,
};


type CourseCardProps={
  title: string;
  progress: number;
  icon_name: keyof typeof iconMap;
}

const CourseCard=({title,progress,icon_name,}:CourseCardProps ) =>{
  const Icon = iconMap[icon_name] || BookOpen;

  return (
    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 transition">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={18} />
        <h3 className="font-medium">{title}</h3>
      </div>

      <div className="w-full bg-zinc-800 h-2 rounded">
        <div
          className="bg-green-500 h-2 rounded transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-zinc-400 mt-2">{progress}% completed</p>
    </div>
  );
}


export default CourseCard;