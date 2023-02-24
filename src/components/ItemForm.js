import React from "react";


function ItemForm({onItemFormSubmit, onFormChange}) {
  
  return (
    <form onSubmit={onItemFormSubmit} onChange={onFormChange} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
