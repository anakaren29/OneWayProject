import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleChevronUp, faCircleChevronDown} from '@fortawesome/free-solid-svg-icons';


export default function Panel({ titulo, parrafo, active, onShow }) {

  return (
     <div>
       <button  onClick={onShow}>
         {titulo}
         { active ? <div > <FontAwesomeIcon icon={faCircleChevronUp} size="xl"/></div>:
            <div ><FontAwesomeIcon icon={faCircleChevronDown} size="lg"/> </div>}
       </button>
       {
         active && (<p>{parrafo}</p> )
       }
     </div >

  )
}

