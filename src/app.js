import 'babel-polyfill'
import './assets/sass/reset.scss'
import './assets/style/test.css'
import logo from './assets/images/icon-login.png'
import button from './assets/images/icon-button.png'

let ele = document.createElement('div');
ele.className = 'qqqq';
ele.innerHTML = ['Hello', 'Worlrrrrry111222d'].join(' ');
document.body.append(ele)
ele.classList.add('hello');

let img = new Image();
img.src = logo;
ele.append(img)
let but = new Image();
but.src = button;
ele.append(but)
