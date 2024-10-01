import './ResetPassForm.css';
import { IoIosMail } from "react-icons/io";


const ResetPassForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Şifremi Unuttum</h1>

            <div className="input-box">
                <input type="text" placeholder="E-mail adresi" required/>
                <IoIosMail className='icon'/>
            </div>
           
            <button type="submit">Gönder</button>

      </form>
    </div>
  )
}

export default ResetPassForm
