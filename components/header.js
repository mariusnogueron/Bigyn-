export default function Header() {

    const Header = document.createElement('header');
    Header.innerHTML = `
    <div class="container__header">
        <div class="img-logo">
            <img src="/img/logo.svg" alt="logo de l'entreprise">
        </div>
        <div class="button__header">
            <a href="#">Creer ton vinyle</a>
            <a href="#">Nous rejoindre</a>
        </div>
    </div>
    `
    return Header;
}