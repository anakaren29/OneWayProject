export default function Panel({ titulo, parrafo, active, onShow }) {

  return (
     <div>
       <button  onClick={onShow}>
         {titulo}
         {active ? <div className="chevronActive">&#8964;</div>:
         <div className="chevronDesactive">&#8964;</div>}
       </button>
       {
         active && (<p>{parrafo}</p> ) 
       }
     </div >

  )
}

