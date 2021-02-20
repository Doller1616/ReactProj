import React from 'react'
import { DropdownItem } from 'reactstrap';

export function CreateDDItem(props) {
  
    let data = props.data
    let collectDDItems = []

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        collectDDItems = [...collectDDItems, 
        <DropdownItem key={'ddItem'+i} tabIndex={(i+1)}><div onClick={(e)=>props.selectedItem(element)}>{element.text}</div></DropdownItem>]
    }

    return (<div id={props.id}>{collectDDItems}</div>)
  
}
