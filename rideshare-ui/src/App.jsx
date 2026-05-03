import StatusBar from './components/StatusBar'
import Header from './components/Header'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex gap-8 justify-center items-start p-8">

      {/* Tela 1 — fundo claro */}
      <div className="w-80 bg-white rounded-3xl shadow-lg overflow-hidden">
        <StatusBar />
        <Header />
      </div>

      {/* Tela 2 — fundo azul */}
      <div className="w-80 bg-blue-800 rounded-3xl shadow-lg overflow-hidden">
        <StatusBar dark />
        <Header dark />
      </div>

    </div>
  )
}