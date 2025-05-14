
function NewPage() {

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>

      <form className="bg-slate-800 p-10" onSubmit={handleSubmit}>

        <label htmlFor="titulo">titulo</label>
        <input type="text"
         id="titulo"
         className="border-2 w-full p-2 mt-2 placeholder-gray-400"
         /> 

        <label htmlFor="descripcion">descripcion</label>
        <textarea  id="descripcion" rows="3"
        className="border-2 w-full p-2 mt-2 placeholder-gray-400"
        ></textarea>

        <button>Crear</button>
      </form>

    </div>
  )
}

export default NewPage