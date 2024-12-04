export default function Header() {

    const Header = document.createElement('header');
    Header.innerHTML = `
    <div class="container__header">
        <div class="img-logo">
           <a href="/index.html"><img src="/img/logo.svg" alt="logo de l'entreprise"></a> 
        </div>
        <div class="button__header">
            <a href="/join/">Creer ton vinyle</a>
            <a href="/create-vinyl/">Nous rejoindre</a>
        </div>
    </div>
    `
    return Header;
}