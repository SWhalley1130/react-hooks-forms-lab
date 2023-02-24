import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setformData]=useState(
    {
      id:uuid(),
      name: "",
      category: 'Produce'
    }
  );

  console.log(items)
  console.log(formData)

  function handleFormChange(event)
  {
    let key=event.target.name;
    let value=event.target.value
    setformData(
    {
      ...formData,
      [key]:value,
      id:uuid()
    })
  }

  function handleNewItem(event)
  {
    event.preventDefault();
    setItems([...items, formData])
  }
  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList onFormChange={handleFormChange} onItemFormSubmit={handleNewItem} items={items} />
    </div>
  );
}

export default App;
