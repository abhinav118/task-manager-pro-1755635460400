interface TaskCardProps {
  draggable?: any
  clickable?: any
}

export default function TaskCard({ draggable, clickable }: TaskCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-all cursor-pointer">
      {/* TaskCard component content */}
    </div>
  )
}