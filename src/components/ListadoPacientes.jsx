
import Paciente from "./Paciente"

const ListadoPacientes = ({patients, setPatient}) => {


 
  
  
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        {patients && patients.length ? (
          <>

              <h2 className="font-black text-3xl text-center" >Patient List</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                      Magage your {''}
                      <span className=" text-indigo-600 font-bold ">Patients and Appointments</span>
                    </p>

              { patients.map( patient => (
                
                      <Paciente 
                          key={patient.id}
                          patient={patient}
                          setPatient={setPatient}
                      />
                ))}
          </>
        ): (
          <>
          <h2 className="font-black text-3xl text-center" >No patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                      Start adding patients {''}
                      <span className=" text-indigo-600 font-bold ">
                                                    and they will appear in this place</span>
                    </p>


          </>

        )}

  
    </div>
  )
}
export default ListadoPacientes