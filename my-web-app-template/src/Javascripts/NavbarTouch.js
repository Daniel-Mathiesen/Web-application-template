import { useState } from "react";

const list = document.querySelectorAll(".list")

console.log(list);

function activeLink(){
    console.log(1);
    list.forEach((item) =>
    item.classList.remove('active'));
    console.log(this);
    this.classList.add("active")
}

console.log('run');

    // list.forEach((item) =>
    //     item.addEventListener('click', activeLink));

