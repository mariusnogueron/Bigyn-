import './style.scss'



const numberIteration = 6;
const barContainer = document.querySelector('.transition__bar')


for (let i = 0; i < numberIteration; i++) {

    barContainer.forEach( `<div class = ${numberIteration} ></div>`);

    if (i % 2 === 0) {
        barContainer.style.backgroundColor = '$--pink-color';
    } else {
        barContainer.style.backgroundColor = '$--green-color';
    }

    barContainer.style.height = '100%';
    barContainer.style.width = 'calc(100% / 6)';
}



const buttonAccept = document.querySelector('.button__fictive-accept');

buttonAccept.addEventListener('click', () => {
    document.querySelector('.background__prevention').style.display = 'none';
})

