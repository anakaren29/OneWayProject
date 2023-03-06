export default function Panel({ titulo, parrafo, active, onShow }) {

  return (
     <div>
       <button style={designButton} onClick={onShow}>
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

const designButton ={
  width:"50%",
  height:"12vh",
  padding:20,
  backgroundColor:"#3c3c3c",
  color:"white",
  borderRadius:7,
  display:"flex",
  margin:"0 auto",
  alignItems:"center",
  justifyContent:"space-between",
  fontFamily: "sans-serif",
  fontSize: "1rem",
  fontWeight:"bold",
  cursor:"pointer"
}