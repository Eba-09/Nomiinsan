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
        alert("Ном амжилттай үүслээ");
    })
    .catch((error) => {
        console.error("Error:", error);
    });};  
    return (
        <div className='min-h-full w-fit bg-gray-100 text-gray-900 p-8'>
            <div className="bg-white p-2 mr-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
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
                        <select
                    id="authorSelect"
                     className="w-50 p-2 rounded"
                     onChange={(e) => {
                       setAuthorId(e.target.value);
                     }}>
                     <option value="">-- Сонгох --</option>
                     {authors.map((author) => (
                       <option key={author._id} value={author._id}>
                         {author.AuthorLname}
                       </option>
                     ))}
            </select>
                    </div>
                    <div className="flex flex-col">
                        <p>Категориуд:</p>
        <select
                    id="categorySelect"
                     className="w-50 p-2 rounded"
                     onChange={(e) => {
                       setCategory(e.target.value);
                     }}>
                     <option value="">-- Сонгох --</option>
                     {categories.map((category) => (
                       <option key={category._id} value={category._id}>
                         {category.name}
                       </option>
                     ))}
            </select>
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