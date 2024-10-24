import './style.scss'

document.addEventListener('DOMContentLoaded', () => {
    console.log('miaou');
})

const buttonAccept = document.querySelector('.button__fictive-accept');

buttonAccept.addEventListener('click', () => {
    document.querySelector('.background__prevention').style.display = 'none';
})
