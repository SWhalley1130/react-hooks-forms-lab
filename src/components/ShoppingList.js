import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit, onFormChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSearch, setSelectedSearch]=useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event)
  {
    setSelectedSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {

    if (item.name.toUpperCase().includes(selectedSearch.toUpperCase()))
    {
      if (selectedCategory === "All") 
      {
        return true;
      }
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} onFormChange={onFormChange}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
