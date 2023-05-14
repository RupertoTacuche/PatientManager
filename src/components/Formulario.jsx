import { useEffect, useState } from "react"
import Error from "./Error"


const Formulario = ({ patients, setPatients, patient }) => {
  const [name, setName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    
  }, [patient])


  



  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario
    if([name, owner, email, fecha, symptoms].includes('')){
      console.log('There is at least one empty field')
      setError(true)
      return;
    } 
    setError(false)
    
    // objeto de pacientes
    const objectPatient = {
      name, 
      owner, 
      email, 
      fecha, 
      symptoms,
      id: generarId()
    }

    //console.log(objectPatient)
    //setPatients(name)
   
  setPatients([...patients, objectPatient]);

  // Reiniciar el formulario
  setName('')
  setOwner('')
  setEmail('')
  setFecha('')
  setSymptoms('')
    
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Add Patient and {''}
          <span className="text-indigo-600 font-bold ">Manage them</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {error && <Error><p>All fields are required</p></Error>}

          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet Name 
            </label>

            <input 
              id="pet"
              type="text"
              placeholder="Pet´s Name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Owner's name
            </label>

            <input 
              id="owner"
              type="text"
              placeholder="Owner's Name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
            </label>

            <input 
              id="email"
              type="email"
              placeholder="owner contact email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>

          <div className="mb-5">
            <label htmlFor="register" className="block text-gray-700 uppercase font-bold">
            Register
            </label>

            <input 
              id="register"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}

            />
          </div>

          <div className="mb-5">
            <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            
              Symptoms
            </label>

            <textarea 
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}

            />
                
                
          </div>
          <input 
             type="submit"
             className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
             value="Add patient"
          />
          
        </form>
    </div>
  )
}
export default Formulario