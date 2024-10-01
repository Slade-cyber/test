import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const LoginForm = () => {

const [action, setAction] = useState('');

const registerLink = () => {
  setAction(' active');
}

const loginLink = () => {
  setAction(' active');
}

  return (
    <div className={'wrapper${action}'}>
      <div className='form-box login'>
      <form action="">
        <h1>Giriş Yap</h1>
            <div className="input-box">
                <input type="text" placeholder="Kullanıcı Adı" required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Parola" required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Beni Hatırla</label>
                <a href="#">Şifremi Unuttum</a>
            </div>
            <button type="submit">Giriş Yap</button>

            <div className="register-link">
                <p> Hesap oluştur <a href="#" onClick={registerLink}>Kayıt Ol</a></p>
            </div>
      </form>
      </div>



<div className='form-box register'>
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
                <p> Zaten bir hesabın var mı? <a href="#" onClick={loginLink}>Giriş Yap</a></p>
            </div>
      </form>
      </div>
    </div>
  )
}

export default LoginForm
