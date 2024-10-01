import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Kayıt Ol</h1>
            <div className="input-box">
                <input type="text" placeholder="Adı-Soyadı" required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="E-mail adresi" required/>
                <IoIosMail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Parola" required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Parola tekrar" required/>
                <FaLock className='icon'/>
            </div>
            <div className="terms-service">
                <label><input type="checkbox" />Hizmet Şartlarındaki tüm beyanları kabul ediyorum</label>
            </div>
            <button type="submit">Kayıt Ol</button>

            <div className="login-link">
                <p> Zaten bir hesabın var mı? <a href="#">Giriş Yap</a></p>
            </div>
      </form>
    </div>
  )
}

export default RegisterForm
