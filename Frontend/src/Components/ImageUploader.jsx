import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    image: null,
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFormData((prev) => ({ ...prev, file: selectedFile }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.file) return;

    const bookData = new FormData();
    bookData.append("title", formData.title);
    bookData.append("author", formData.author);
    bookData.append("isbn", formData.isbn);
    bookData.append("image", formData.file);

    try {
      const response = await fetch("http://your-backend-api.com/books", {
        method: "POST",
        body: bookData,
      });
      const data = await response.json();
      console.log("Book added successfully:", data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md w-80">
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        className="block w-full p-2 border rounded-md mb-2"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="block w-full p-2 border rounded-md mb-2"
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={formData.isbn}
        onChange={handleChange}
        className="block w-full p-2 border rounded-md mb-2"
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-2" />
      {formData.image && <img src={formData.image} alt="Book Cover" className="mt-2 w-full rounded-md" />}
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded-lg w-full">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
