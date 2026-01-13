import { useState } from "react";
import type { ListItem } from './types/ListItem';

/**
 * 
 * items : [
 *    'id',
 *    'name',
 *    'price',
 *    'isAvailable'
 * ]
 */

export default function List({items, hideNotAvailable}){

    const [itemList, setItems] = useState(items);
    const [elements, setElements] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [newItem, setNewItem] = useState('');

    function addElement(){
      elements.push(newItem)
      setElements(elements)
      setNewItem('');
    }
    
    function handleItemChange(value : string){
      setNewItem(value)
    }

    function handleRemoveItem(value : string) {
      let newElementList = [...elements]
      newElementList = newElementList.filter(element => element != value);
      setElements(newElementList)
    }

    function renderItems()
    {
      let items = itemList.filter((item) => item.isAvailable && hideNotAvailable);
      return items.map((item) => (
          <li> 
              <span> {item.name} </span>
              <button type="button" onClick={() => handleRemoveItem(item.id)}>X</button> 
          </li> 
      ))
    }
  
    return (
      <>
        <input placeholder="teste" type="text" id="new-element" value={newItem} onChange={e => handleItemChange(e.target.value)}/>
        <button type="button" onClick={addElement} >Adicionar</button>
        <ul>
          {renderItems()}
        </ul>
      </>
    )
}
