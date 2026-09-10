import { useRef } from "react"
import { createPortal } from 'react-dom'

// const Modal = ({ children }) => {
//     const element = useRef(null)
//     if(!element.current){
//         element.current = document.createElement('div')
//     }

//     useEffect(() => {
//       const modalRoot = document.getElementById("modal")
//       modalRoot.appendChild(element.current)
    
//       return () => {
//         modalRoot.removeChild(element.current)
//       }
//     }, [])
    
  
//     return createPortal(<div>{children}</div>, element.current)
// }

// export default Modal

const Modal = ({ children }) => {
    const elementRef = useRef(null)
    if(!elementRef){
        elementRef.cuurent = document.createElement('div')
    }

    useEffect(() => {
        const  modalRoot = document.getElementById('modal')
        modalRoot.appendChild(elementRef.current)
      return () => {
        modalRoot.removeChild(elementRef.current)
      }
    }, [])
    
  return createPortal(<div>{children}</div>, modalRoot)
}

export default Modal