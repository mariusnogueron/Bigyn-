import './style.scss'
import 'vanilla-tilt'

import Header from './components/header.js'
import Footer from './components/footer.js'


window.addEventListener('load', () => {
    document.body.prepend(Header());
    document.body.appendChild(Footer());
})

const transitionBar = document.querySelector('.transition__bar');

const evenBar = document.createElement('div');
evenBar.classList.add('even-bar');
const oddBar = document.createElement('div');
oddBar.classList.add('odd-bar');

for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
        transitionBar.appendChild(oddBar.cloneNode(true));
    }
    else {
        transitionBar.appendChild(evenBar.cloneNode(true));
    }
}




// const buttonAccept = document.querySelector('.button__fictive-accept');
//
// buttonAccept.addEventListener('click', () => {
//     document.querySelector('.background__prevention').style.display = 'none';
// })

