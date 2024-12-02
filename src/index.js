import {model} from "./model";
import {templates} from "./templates";
import "./styles/main.css";
const $site = document.querySelector('#site');

model.forEach(block => {
    let html= templates[block.type];
    if(html) {
        $site.insertAdjacentHTML('beforeend',html(block));
    }

});


