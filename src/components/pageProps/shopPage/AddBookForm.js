// import React, { useState } from "react";

// const AddBookForm = ({ addBook }) => {
//   const [newBook, setNewBook] = useState({
//     img: "",
//     productName: "",
//     price: "",
//     color: "",
//     badge: "",
//     des: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewBook({ ...newBook, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addBook(newBook);
//     // Clear the form
//     setNewBook({
//       img: "",
//       productName: "",
//       price: "",
//       color: "",
//       badge: "",
//       des: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add New Book</h2>
//       <label>
//         Image URL:
//         <input
//           type="text"
//           name="img"
//           value={newBook.img}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Product Name:
//         <input
//           type="text"
//           name="productName"
//           value={newBook.productName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Price:
//         <input
//           type="text"
//           name="price"
//           value={newBook.price}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Color:
//         <input
//           type="text"
//           name="color"
//           value={newBook.color}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Badge:
//         <input
//           type="text"
//           name="badge"
//           value={newBook.badge}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Description:
//         <textarea
//           name="des"
//           value={newBook.des}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Add Book</button>
//     </form>
//   );
// };

// export default AddBookForm;
