import { useState } from "react";

export function ProductForm() {
const [name, setName] = useState("")
const [image, setImage] = useState("")
const [price, setPrice] = useState("")
const [description, setDescription] = useState("")

const formData = {
        name: name, 
        price: price,
        image: image,
        description: description
}

const handlerSubmit = (event) => {
  event.preventDefault();
  alert(JSON.stringify(formData));
}

  return (
    <form className="post-form" onSubmit={handlerSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Enter name here"
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={image}
            placeholder="Enter image url here"
            onChange={(event) => {
              setImage(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={description}
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value)
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
