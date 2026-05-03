import { Signal, Wifi, Battery } from 'lucide-react'

export default function StatusBar({ dark = false }) {
  const color = dark ? 'text-white' : 'text-gray-800'

  return (
    <div className={`flex justify-between items-center px-6 py-2 ${color}`}>
      <span className="text-sm font-semibold">9:41</span>
      <div className="flex items-center gap-1">
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={14} />
      </div>
    </div>
  )
}