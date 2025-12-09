import { useState } from 'react'


export default function List(){

    const elements = ['Item 1', 'Item 2', 'Item 3'];
    const formattedElements = elements.map(element =>
        <li>
            element
        </li>
    )
  
    return (
      <>
      <input placeholder="teste" />
        <ul>
          {formattedElements}
        </ul>
      </>
    )
}
