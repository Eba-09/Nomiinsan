import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
const OneBook = () => {
    const location = useLocation();
    const [bookdata, setbookdata] = useState([]);
    const { bookid } = location.state || {};
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        if(bookid){
            axios
                .get(`http://localhost:8000/api/lib/book/${bookid}`)
                .then((res)=>{
                    setbookdata(res.data.data)
                })
                .catch((e)=>{
                    console.log(e);
                })
        }
    },[bookid]);
    const Zahialah = (nomCode) => {
        if(user){
            axios
                 .post('http://localhost:8000/api/lib/zahialga', {
                    nomCode: nomCode,
                    userCode: user
                })
                .then((res) => {
                    if(res.data.success){
                        alert("amjilttai zahiallaa.")
                    }
                })
                .catch((e) => {
                    alert("zahialga amjiltgui bolloo")
                })
        }
        else{
            navigate('/userLogin')
        }
      }
    const renderBook = () => {
        if (!bookdata) return <p>Уншиж байна...</p>;
      
        return (
            <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col md:flex-row items-center justify-center px-6 py-10">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img
                src={`http://localhost:8000${bookdata.photo}`}
                alt={bookdata.name}
                className="w-[300px] h-[420px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 max-w-2xl bg-white p-6 rounded-3xl shadow-xl flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">{bookdata.name}</h1>
              <p className="text-lg text-gray-600">Зохиолч: <span className="font-semibold">{bookdata.authorId?.AuthorLname || "Тодорхойгүй"}</span></p>
      
              <div className="grid grid-cols-2 gap-4 text-gray-700 text-base">
                <div><h6>Үнэ:</h6> <span className="text-red-500">{bookdata.price}₮</span></div>
                <div><h6>Хэл:</h6> {bookdata.hel}</div>
                <div><h6>ISBN:</h6> {bookdata.isbn}</div>
                <div><h6>Нөөц:</h6> {bookdata.too}ш</div>
                <div><h6>Хуудас:</h6> {bookdata.huudas}</div>
                <div><h6>Байршил:</h6> {bookdata.bairshil}</div>
              </div>
              <div className="flex items-center gap-2 text-yellow-500 text-lg">
                {"★".repeat(bookdata.rating)}{"☆".repeat(5 - bookdata.rating)}
                <span className="text-gray-600 text-base">({bookdata.rating})</span>
              </div>
      
              <button
                onClick={() => Zahialah(bookdata._id)}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white py-3 px-6 text-lg rounded-xl font-semibold transition"
              >
                Захиалах
              </button>
            </div>
          </div>
        );
      };
      
  return (
    <div>{renderBook()}</div>
  )
}

export default OneBook