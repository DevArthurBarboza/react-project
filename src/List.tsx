import { useState } from "react";

export default function List(){

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
  
    return (
      <>
        <input placeholder="teste" type="text" id="new-element" value={newItem} onChange={e => handleItemChange(e.target.value)}/>
        <button type="button" onClick={addElement} >Adicionar</button>
        <ul>
          {elements.map((element) => (
              <> 
                <li> {element} 
                  <button type="button" onClick={() => handleRemoveItem(element)}>X</button> 
                </li> 
              </>
          ))}
        </ul>
      </>
    )
}
