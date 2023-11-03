// import React, { useState } from "react";

// const UpdateBookForm = ({ updateBook, bookToUpdate }) => {
//   const [updatedBook, setUpdatedBook] = useState({ ...bookToUpdate });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedBook({ ...updatedBook, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateBook(updatedBook);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Update Book</h2>
//       <label>
//         Image URL:
//         <input
//           type="text"
//           name="img"
//           value={updatedBook.img}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Product Name:
//         <input
//           type="text"
//           name="productName"
//           value={updatedBook.productName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Price:
//         <input
//           type="text"
//           name="price"
//           value={updatedBook.price}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Color:
//         <input
//           type="text"
//           name="color"
//           value={updatedBook.color}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Badge:
//         <input
//           type="text"
//           name="badge"
//           value={updatedBook.badge}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Description:
//         <textarea
//           name="des"
//           value={updatedBook.des}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Update Book</button>
//     </form>
//   );
// };

// export default UpdateBookForm;
