import { Menu, Bell } from 'lucide-react'

export default function Header({ dark = false }) {
  const color = dark ? 'text-white' : 'text-gray-800'

  return (
    <div className={`flex justify-between items-center px-6 py-3 ${color}`}>
      <Menu size={22} />
      <div className="relative">
        <Bell size={22} />
        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
          1
        </span>
      </div>
    </div>
  )
}