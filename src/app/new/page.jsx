"use client"
import { useRouter } from 'next/navigation'




{useRouter}
function NewPage() {
const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()


    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        title: e.target.titulo.value,
        description: e.target.descripcion.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data)
    router.push('/')
  }

  return (
    <div className="h-screen  flex flex-col  justify-center items-center">

      <form className="bg-slate-800 p-10 w-1/4  " onSubmit={handleSubmit}>

        <label htmlFor="titulo" className="font-bold mb-4">titulo</label>
        <input type="text"
          id="titulo"
          className="border-2 w-full p-2  mb-4 placeholder-gray-400 bg-white text-black"
          placeholder="Titulo"
        />

        <label htmlFor="descripcion" className="font-bold mb-2">descripcion</label>
        <textarea id="descripcion" rows="3"
          className="border-2 w-full p-2 mb-4 placeholder-gray-400 bg-white text-black"
          placeholder="Descripcion"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
      </form>

    </div>
  )
}

export default NewPage