export default function Footer() {
    const Footer = document.createElement('footer');
    Footer.innerHTML = `
    <div class="container__footer">
        <div class="wrapper__rectangle">
            <img class="googly-eyes" src="../img/eyes.svg" alt="Deux yeux regardant en bas à gauche">
            <div class="text-footer">
                <h3>Notre studio</h3>
                <div class="infos">
                    <strong>Entreprise</strong>
                    <a href="https://dontasktoask.com/"><span>Conditions generales de vente</span></a>
                    <a href="https://dontasktoask.com/"><span>politique de confidentialite</span></a>
                    <a href="https://dontasktoask.com/"><span>FAQ</span></a>
                </div>
                <div class="infos">
                    <strong>Contactez-Nous</strong>
                    <a href="mailto:info@bigyn.com"><span>info@bigyn.com</span></a>
                </div>
                <div class="infos">
                    <strong>Réseaux</strong>
                    <div class="infos-list">
                    <a href="https://www.youtube.com/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_126_155)">
                            <path d="M2.08325 8.33317C2.08325 7.2281 2.52224 6.16829 3.30364 5.38689C4.08504 4.60549 5.14485 4.1665 6.24992 4.1665H18.7499C19.855 4.1665 20.9148 4.60549 21.6962 5.38689C22.4776 6.16829 22.9166 7.2281 22.9166 8.33317V16.6665C22.9166 17.7716 22.4776 18.8314 21.6962 19.6128C20.9148 20.3942 19.855 20.8332 18.7499 20.8332H6.24992C5.14485 20.8332 4.08504 20.3942 3.30364 19.6128C2.52224 18.8314 2.08325 17.7716 2.08325 16.6665V8.33317Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.4167 9.375L15.6251 12.5L10.4167 15.625V9.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_126_155">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </a>
                    <a href="https://www.instagram.com/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_126_145)">
                            <path d="M4.16675 8.33317C4.16675 7.2281 4.60573 6.16829 5.38714 5.38689C6.16854 4.60549 7.22835 4.1665 8.33341 4.1665H16.6667C17.7718 4.1665 18.8316 4.60549 19.613 5.38689C20.3944 6.16829 20.8334 7.2281 20.8334 8.33317V16.6665C20.8334 17.7716 20.3944 18.8314 19.613 19.6128C18.8316 20.3942 17.7718 20.8332 16.6667 20.8332H8.33341C7.22835 20.8332 6.16854 20.3942 5.38714 19.6128C4.60573 18.8314 4.16675 17.7716 4.16675 16.6665V8.33317Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.375 12.5C9.375 13.3288 9.70424 14.1237 10.2903 14.7097C10.8763 15.2958 11.6712 15.625 12.5 15.625C13.3288 15.625 14.1237 15.2958 14.7097 14.7097C15.2958 14.1237 15.625 13.3288 15.625 12.5C15.625 11.6712 15.2958 10.8763 14.7097 10.2903C14.1237 9.70424 13.3288 9.375 12.5 9.375C11.6712 9.375 10.8763 9.70424 10.2903 10.2903C9.70424 10.8763 9.375 11.6712 9.375 12.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.1875 7.8125V7.82292" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_126_145">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_126_160)">
                            <path d="M4.16675 6.24984C4.16675 5.6973 4.38624 5.1674 4.77694 4.7767C5.16764 4.386 5.69755 4.1665 6.25008 4.1665H18.7501C19.3026 4.1665 19.8325 4.386 20.2232 4.7767C20.6139 5.1674 20.8334 5.6973 20.8334 6.24984V18.7498C20.8334 19.3024 20.6139 19.8323 20.2232 20.223C19.8325 20.6137 19.3026 20.8332 18.7501 20.8332H6.25008C5.69755 20.8332 5.16764 20.6137 4.77694 20.223C4.38624 19.8323 4.16675 19.3024 4.16675 18.7498V6.24984Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.33325 11.4585V16.6668" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.33325 8.3335V8.34391" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 16.6668V11.4585" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6667 16.6668V13.5418C16.6667 12.9893 16.4472 12.4594 16.0565 12.0687C15.6658 11.678 15.1359 11.4585 14.5833 11.4585C14.0308 11.4585 13.5009 11.678 13.1102 12.0687C12.7195 12.4594 12.5 12.9893 12.5 13.5418" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_126_160">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </a>
                    <a href="https://x.com/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_126_140)">
                            <path d="M4.16675 4.1665L16.3886 20.8332H20.8334L8.61154 4.1665H4.16675Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.16675 20.8332L11.2167 13.7832M13.7792 11.2207L20.8334 4.1665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_126_140">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </a>
                    <a href="https://facebook.com/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_126_151)">
                            <path d="M7.29175 10.4167V14.5833H10.4167V21.875H14.5834V14.5833H17.7084L18.7501 10.4167H14.5834V8.33333C14.5834 8.05707 14.6932 7.79211 14.8885 7.59676C15.0839 7.40141 15.3488 7.29167 15.6251 7.29167H18.7501V3.125H15.6251C14.2437 3.125 12.919 3.67373 11.9422 4.65049C10.9655 5.62724 10.4167 6.952 10.4167 8.33333V10.4167H7.29175Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_126_151">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
    `

    return Footer;
}