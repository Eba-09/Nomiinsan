import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons'
const userLogin = () => {
    const [oyutniCode, setoyutniCode] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const logSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/lib/user/login', {oyutniCode, password})
        .then(result => {
          console.log(result)
          if (result.data.success) {
            alert("Амжилттай нэвтэрлээ");
            navigate('/sanchHome');
          }
        })
        .catch(err => console.log(err))
    };
  return (
    
    <div className='Log'>
      <div className='Login'>
      <h4>Хэрэглэгч нэвтрэх</h4>
      <form onSubmit={logSubmit}>
      <div className="email">
        <FontAwesomeIcon icon={faAddressBook} />
        <input placeholder="oyutni code oo oruulna uu" type="text" onChange={(e) => setoyutniCode(e.target.value)} />
      </div>
      <div className="pass">
      <FontAwesomeIcon icon={faLock} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="button">
        <button title="Нэвтрэх">Newterh</button>
        </div>
        </form>
        <div className="Role">
        <button onClick={() => navigate('/')}>Hereglegch</button>
        </div>
    </div>
    </div>
  )
}
export default userLogin