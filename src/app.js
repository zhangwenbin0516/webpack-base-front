import './assets/sass/reset.scss'
import './assets/style/test.css'
import logo from './assets/images/icon-login.png'

let ele = document.createElement('div');
ele.className = 'qqqq';
ele.innerHTML = ['Hello', 'Worlrrrrry111222d'].join(' ');
document.body.append(ele)
ele.classList.add('hello');

let img = new Image();
img.src = logo;
ele.append(img)
