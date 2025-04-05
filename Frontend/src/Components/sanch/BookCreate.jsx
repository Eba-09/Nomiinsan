import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BookCreate = () => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [isbn, setIsbn] = useState('');
    const [rating, setRating] = useState('');
    const [price, setPrice] = useState('');
    const [hel, setHel] = useState('');
    const [hewlesenOgnoo, setHewOgnoo] = useState('');
    const [too, setToo] = useState('');
    const [huudas, setHuudas] = useState('');
    const [available, setAvailable] = useState('');
    const [category, setCategory] = useState('');
    const [bairshil, setBairshil] = useState('');
    const [createUser, setCreateUser] = useState('');
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/lib/author')
            .then(response => setAuthors(response.data.data))
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        axios.get('http://localhost:8000/api/lib/category')
            .then(response => setCategories(response.data.data))
            .catch(error => console.log(error));
    }, []);
    const handleFileChange = (e) => {
      const file = e.target.files[0]; // Эхний файлыг авна
      if (file) {
          setPhoto(file); // Фото-г хадгална
      }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo); // Зураг оруулах
    formData.append("authorId", authorId);
    formData.append("isbn", isbn);
    formData.append("rating", rating);
    formData.append("price", price);
    formData.append("hel", hel);
    formData.append("hewlesenOgnoo", hewlesenOgnoo);
    formData.append("too", too);
    formData.append("huudas", huudas);
    formData.append("available", available);
    formData.append("bairshil", bairshil);
    formData.append("category", category);
    formData.append("createUser", createUser);

    axios.post('http://localhost:8000/api/lib/book', formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Энэ нь файл илгээх формат юм
        },
    })
    .then((response) => {
        console.log("Success:", response.data);
        alert("amjilltai zurag oruullaa.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });};  
    return (
        <div className='nom-burtgel'>
            <div className='Navbars'>
                <button title="Log-out" onClick={() => navigate('/')} />
            </div>
            <div className="burtgel-cont">
                <form onSubmit={handleSubmit}>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Номын нэр" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
          <div className="book-input">
            <FontAwesomeIcon icon={faBook} />
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
          </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="ISBN код" type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Үнэлгээ" type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Үнэ" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Хэл" type="text" value={hel} onChange={(e) => setHel(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Хэвлэгдсэн огноо" type="date" value={hewlesenOgnoo} onChange={(e) => setHewOgnoo(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Хуудасны тоо" type="number" value={huudas} onChange={(e) => setHuudas(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Номын тоо" type="number" value={too} onChange={(e) => setToo(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Байршил" type="text" value={bairshil} onChange={(e) => setBairshil(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <p>Зохиолчид:</p>
                        {authors.map(author => (
                            <p key={author._id} className='bg-amber-200 w-50 mt-1.5' onClick={() => {setAuthorId(author._id); console.log('authorid:', author._id)}}>{author.AuthorLname}</p>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <p>Категориуд:</p>
                        {categories.map(category => (
                           <p key={category._id} className='bg-amber-100 w-50' onClick={() => { 
                            setCategory(category._id); 
                            console.log("Selected cat ID:", category._id); 
                        }}>
                           {category.name}
                         </p>
                        ))}
                        

                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="Үүсгэсэн хэрэглэгч" type="text" value={createUser} onChange={(e) => setCreateUser(e.target.value)} />
                    </div>
                    <div className="book-input">
                        <FontAwesomeIcon icon={faBook} />
                        <input placeholder="төрөл" type="text" value={available} onChange={(e) => setAvailable(e.target.value)} />
                    </div>
                    <div className="button">
                        <button type="submit">Үүсгэх</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookCreate;