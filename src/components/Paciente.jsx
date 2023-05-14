const Paciente = ({patient}) => {

  const { name, owner, email, fecha, symptoms } =patient
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">

    <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
      <span className="font-normal normal-case">{name}</span>

    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
      <span className="font-normal normal-case">{owner}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
      <span className="font-normal normal-case">{email}</span>
    </p>

  

    <p className="font-bold mb-3 text-gray-700 uppercase">discharge date: {''}
      <span className="font-normal normal-case">{fecha}</span>
    </p>
    
    <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {''}
      <span className="font-normal normal-case">{symptoms}</span>
    </p>
    
  </div>
  )
}
export default Paciente