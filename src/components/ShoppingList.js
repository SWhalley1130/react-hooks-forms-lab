import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";
import { version } from "react/cjs/react.production.min";

function ShoppingList({ items, onSetItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSearch, setSelectedSearch]=useState("");
  const [formData, setformData]=useState(
    {
      id:uuid(),
      name: "",
      category: 'Produce'
    }
  );


  function handleItemFormSubmit(event)
  {
    event.preventDefault();
    const itemName = event.target.name.value;
    const itemCategory = event.target.category.value

    setformData({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })
    console.log(formData)
    onSetItems(formData);

  }

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
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
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
