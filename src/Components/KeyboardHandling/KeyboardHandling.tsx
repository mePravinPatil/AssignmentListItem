import { useState } from "react";
import "./KeyboardHandling.css";

type ArrayProps = {
  listArrayItems: {name : string}[];
};

const KeyboardHandling = ({listArrayItems} : ArrayProps) => {

let myList = document.getElementById('myList');

myList.onkeydown = function(event) {

  var numberOfCells = document.getElementById('myList').getElementsByTagName("ul").length;
  if (event.keyCode == 38) {
    console.log('up');
    document.getElementById(event.target.id).blur()
    var currentfocus = event.target.id.split('');
    currentfocus.splice(2, 1, +currentfocus[2]-1);
    var newfocus = currentfocus.join('');
    document.getElementById(newfocus).focus();
  }
  else if (event.keyCode == 40) {
    console.log('down');
    document.getElementById(event.target.id).blur()
    var currentfocus = event.target.id.split('');
    currentfocus.splice(2,1, +currentfocus[2]+1);
    var newfocus = currentfocus.join('');
    document.getElementById(newfocus).focus();
  }
};

  return (
    <div>
      <ul id="myList">
        {listArrayItems.map((e, key) => {
          return (
            <li key={key} className="parent-list">
              <ul>
                <li >{e.name}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default KeyboardHandling;
