import React,{useState} from 'react'
import '../../style/SectionRegisterAgent.css'
import ModalRegister from '../ModalRegister';

export default function SectionRegisterAgent() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <div className="SectionRegisterAgent">
        <div>
        <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653359417/RealMod/agenteg_ozzhns.jpg' />
        </div>
        
        <div>
            <p><b>Become a Real Estate Agent</b> <br/>
            We only work with the best companies around the globe to survey
            </p>
        </div>
        <button  onClick={handleOpen}  button type="button" >Register Now</button>
    </div>
    <ModalRegister open={open} handleClose={handleClose}/>
    </>
  )
}
