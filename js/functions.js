"use strict";

// header
function headerScroll() {
    const headerHeight = document.querySelector('#main_header').offsetHeight;
    // einamoji scroll'o vieta (aukstis)
    const height = window.scrollY + headerHeight;
    
    // susidarome sarasa dominanciu sekciju
    let links = [];     // ['#', '#about', ...]
    const DOMlinks = document.querySelectorAll('#main_header nav > a');

    for ( let i=0; i<DOMlinks.length; i++ ) {
        const link = DOMlinks[i];
        const href = link.href;
        const split = href.split('#');

        if ( split.length > 1 ) {
            links.push( '#' + split[1] );
        }
    }

    // randame aukscio pozicija dominanciu sekciju
    let sectionHeights = [];
    for ( let i=0; i<links.length; i++ ) {
        const link = links[i];
        if ( link === '#' ) {
            sectionHeights.push(0);
        } else {
            const section = document.querySelector(link);
            sectionHeights.push(section.offsetTop);
        }
    }

    // nustatome kuri is dominanciu sekciju yra artimiausia mano esamai pozicijai
    let wantedSection = 0;
    for ( let i=0; i<sectionHeights.length; i++ ) {
        const sectionH = sectionHeights[i];    
        if ( sectionH <= height ) {
            wantedSection = i;
        } else {
            break;
        }
    }
        
    // pries tai buvusi nuoroda header > nav netenka active klases
    document.querySelector(`#main_header nav > a.active`).classList.remove('active');

    // naujoji nuoroda header > nav gauna active klase
    document.querySelector(`#main_header nav > a[href="${links[wantedSection]}"]`).classList.add('active');


    return;
}

function headerBackground() {
    if ( window.scrollY > 80 ) {
        document.querySelector('#main_header').classList.remove('header-transparent');
    } else {
        document.querySelector('#main_header').classList.add('header-transparent');
    }
    
    return;
}

// hero
/**
 * Rekursine funkcija, kuri manipuliuoja tekstu
 * @param {Array.<Object>} list Sarasas tekstu, kuriuos reikia animuoti
 * @param {number} wordIndex Kelinta zodi animuoti
 * @param {number} letterIndex Kelinta raide animuoti
 * @param {string} actionType Koki veiksma atlikti
 */
function manipulateLetter( list, wordIndex, letterIndex, actionType ) {
    // elementas kuriame animuotai keiciasi tekstas
    const target = document.getElementById('animated_text');
    const timeStep = 100;
    const delayAfter = 1000;
    const deleteTimeStep = 50;
    const delayBefore = 1000;

    if ( actionType === 'add' ) {
        target.classList.add('line');
        setTimeout(() => {
            target.textContent += list[wordIndex][letterIndex];
            
            if ( list[wordIndex].length > letterIndex + 1 ) {
                manipulateLetter( list, wordIndex, letterIndex+1, actionType )
            } else {
                manipulateLetter( list, wordIndex, letterIndex, 'delayAfter' )
            }
        }, timeStep);
    }
    if ( actionType === 'delayAfter' ) {
        // target.classList.remove('line');
        setTimeout(() => {
            manipulateLetter( list, wordIndex, letterIndex, 'remove' )
        }, delayAfter);
        
    }
    if ( actionType === 'remove' ) {
        // target.classList.add('line');
        setTimeout(() => {
            const word = list[wordIndex];
            target.textContent = word.slice(0, letterIndex);
            
            if ( 0 <= letterIndex - 1 ) {
                manipulateLetter( list, wordIndex, letterIndex-1, actionType )
            } else {
                manipulateLetter( list, wordIndex, letterIndex, 'delayBefore' )
            }
        }, deleteTimeStep);
    }
    if ( actionType === 'delayBefore' ) {
        target.classList.remove('line');
        setTimeout(() => {
            // tikriname kuri zodi paduoti (jei pabaiga, tai duodam vel pirma)
            if ( wordIndex+1 === list.length ) {
                manipulateLetter( list, 0, 0, 'add' )
            } else {
                manipulateLetter( list, wordIndex+1, 0, 'add' )
            }
        }, delayBefore);
    }
}

// about me
function renderSkills( list ) {
    let HTML = '';

    for ( let i=0; i<list.length; i++ ) {
        const skill = list[i];
        HTML += `<div class="progress-bar" data-value="${skill.value}">
                    <div class="texts">
                        <div class="label">${skill.title}</div>
                        <div class="value">0%</div>
                    </div>
                    <div class="full">
                        <div class="bar" style="width: ${skill.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }

    return document.querySelector('#skills').innerHTML = HTML;
}

function progressBarAnimation() {
    const myPositionY = scrollY + window.innerHeight;            // analogiska: window.scrollY;
    const progressBars = document.querySelectorAll('.progress-bar');
    
    for ( let i=0; i<progressBars.length; i++ ) {
        const item = progressBars[i];
        if ( item.dataset.animated && item.dataset.animated === 'done' ) {
            continue;
        }
        const itemHeight = parseFloat(getComputedStyle(item).height);
        if ( item.offsetTop + itemHeight > myPositionY ) {
            continue;
            // break;       // galima nes jei nematai einamojo, tai ir kitu matyti negali, tai ciklas baigtas
        }
        // kadangi animacija ant sio elemento dar neigyvendinta - animuojame
        item.dataset.animated = 'done';
        // animuojame procento reiksmes keitimasi nuo 0 iki nurodytos vertes
        const valueDOM = item.querySelector('.texts > .value');
        const value = parseInt(item.dataset.value);
        const time = 3;     // seconds
        let currentStep = 0;

        const timer = setInterval(() => {
            valueDOM.textContent = currentStep + '%';
            if ( currentStep === value ) {
                clearInterval(timer);
            }
            currentStep++;
        }, time * 1000 / (value + 1));
    }
}

// portfolio
function renderPortfolio( list ) {
    let HTML = '';
    let filterHTML = '';
    let galleryHTML = '';

    // surenkame unikalius tagus
    let uniqueTags = [];

    for ( let i=0; i<list.length; i++ ) {
        const tags = list[i].tags;
        for ( let t=0; t<tags.length; t++ ) {
            if ( uniqueTags.indexOf(tags[t].toLowerCase()) === -1 ) {
                uniqueTags.push(tags[t].toLowerCase());
            }
        }
    }

    // sugeneruoti filtravima
    filterHTML = `<div class="item active">All</div>`;
    for ( let i=0; i<uniqueTags.length; i++ ) {
        filterHTML += `<div class="item">${uniqueTags[i]}</div>`;
    }
    
    // sugeneruoti darbus
    for ( let i=0; i<list.length; i++ ) {
        const work = list[i];
        galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}"
                            data-tags="${work.tags}">
                            <img src="./img/work/${work.photo}"
                                alt="${work.title}">
                            <div class="hover">
                                <a href="${work.link ? work.link : '#'}">${work.title}</a>
                            </div>
                        </div>`;
    }

    // apjungti viska i vientisa HTML
    HTML += `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="list">
                    ${galleryHTML}
                </div>
            </div>`;

    // pilna HMTL iterpiame i DOM'a
    const DOMgallery = document.querySelector('#portfolio_gallery');
    DOMgallery.innerHTML = HTML;

    // prikabinti event listenerius, kad galeti filtruoti darbus
    const filters = DOMgallery.querySelectorAll('.filter > .item');
    for (let i=0; i<filters.length; i++) {
        const element = filters[i];
        element.addEventListener('click', filterGallery);
    };
    return;
}

function filterGallery( event ) {
    document.querySelector('.filter > .item.active').classList.remove('active');
    event.target.classList.add('active');

    const filterTag = event.target.textContent.toLowerCase();
    const works = document.querySelectorAll('.gallery > .list > .item');
    if ( filterTag === 'all' ) {
        for (let i=0; i<works.length; i++) {
            works[i].classList.remove('hide');
        }
        return;
    }

    for (let i=0; i<works.length; i++) {
        const work = works[i];
        const hasTags = work.dataset.tags.toLowerCase().split(',').indexOf(filterTag);
        if ( hasTags >= 0 ) {
            work.classList.remove('hide');
        } else {
            work.classList.add('hide');
        }
    }
    
}

// services

function renderServices( serviceList ) {
    let HTML = '';

    for ( let i=0; i<serviceList.length; i++ ) {
        const service = serviceList[i];
        HTML += `<div class="service col-4 col-md-6 col-xs-12">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }
    
    return document.querySelector('#services_list').innerHTML = HTML;
}

// team
function renderTeamMember( member, columns ) {
    return `<div class="member">
                <div class="top">
                    <img src="./img/team/${member.photo.src}"
                        alt="${member.photo.alt}">
                    <div class="socials">
                        <div class="list">
                            <a href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <p class="name">${member.name}</p>
                <p class="position">${member.position}</p>
            </div>`;
}

// numbers
function renderAchievements( list ) {
    let HTML = '';

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: duok sarasa...');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: sarasas negali buti tuscias...');
    }

    for ( let i=0; i<list.length; i++ ) {
        const item = list[i];

        HTML += `<div class="achievement col-3 col-md-6 col-xs-12">
                    <div class="center">
                        <i class="fa fa-${item.icon}"></i>
                        <div class="texts">
                            <div class="number">${item.number}</div>
                            <br>
                            <h5 class="title">${item.title}</h5>
                        </div>
                    </div>
                </div>`;
        
    }
    
    return document.querySelector('#achievements').innerHTML = HTML;
}

// pricing

// blog
/**
 * Is duotu duomenu generuojamas blog'o postu sarasas
 * @param {Array.<Object>} list Sarasas objektu, kuriuos naudojame renderinimui
 * @returns {string} I tinkama vieta istato sugeneruota HTML koda
 */
function renderBlog( list ) {
    let HTML = '';

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: duok sarasa...');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: sarasas negali buti tuscias...');
    }
    
    for ( let i=0; i<list.length; i++ ) {
        HTML += renderBlogPost( list[i] );
    }

    return document.querySelector('#blog_list').innerHTML = HTML;
}

/**
 * Vienetinio blog'o post generavimo funkcija
 * @param {Object} post Objektas, kuris pilnai apraso vieno post'o turini
 * @returns Sugeneruota vieno post HTML
 */
function renderBlogPost( post ) {
    const pd = post.date;
    const dateLink = `${pd.year}/${pd.month}/${pd.day}`;
    const year = new Date().getFullYear();
    let formatedDate = `${pd.day} ${months[pd.month-1]}`;
    if ( year !== pd.year ) {
        formatedDate += `, ${pd.year}`;
    }

    return `<div class="blog">
                <img src="./img/blog/${post.photo.src}" alt="${post.photo.alt}">
                <a class="date bg-primary" href="#/posts-by-date/${dateLink}">${formatedDate}</a>
                <a class="title" href="${post.link}">${post.title}</a>
                <p>${post.description}</p>
                <a class="more" href="${post.link}">Learn more</a>
            </div>`;
}

// contact us

// maps

// footer

// pagination
/**
 * Karkasas kuris sukuria puslapiuojama turini, pagal pateiktus duomenis ir nurodyta vienetini turini generuojancia funkcija
 * @param {string} target CSS'inis selektorius rasti norimai vietai, kuri sugeneruoti turini
 * @param {function} renderingFunction Nuoroda (refference) i funkcija, kuria reikia naudoti generuojant viena elementa
 * @param {Array.<Object>} data Sarasas objektu is kuriu generuojame turini
 * @param {number} countPerPage Sveikasis skaicius nurodantis po kiek elementu atvaizduoti per viena puslapi. Min: 1; Max: 5.
 * @returns {string} Sugeneruotas turinys, kuri galima puslapiuoti
 */
function renderPagination( target, renderingFunction, data, countPerPage ) {
    if ( typeof(target) !== 'string' ||
         target === '' ) {
        return console.error('Pirmasis parametras: Reikia nurodyti vieta kur sugeneruoti norima turini.');
    }
    
    const DOM = document.querySelector(target);
    if ( DOM === null ) {
        return console.error('Pirmasis parametras: Nerasta nurodyta vieta, kur reikia sugeneruoti norima turini.');
    }

    if( typeof(renderingFunction) !== 'function' ) {
        return console.error('Antrasis parametras: reikia nurodyti funkcijos pavadinima, kuri turi sugeneruoti pavienio elemento HTMLa.');
    }

    if ( !Array.isArray(data) ) {
        return console.error('Treciasis parametras: reikia duoti sarasa objektu, kurie apraso generuojamus elementus.')
    }
    if ( data.length === 0 ) {
        return console.error('Treciasis parametras: reikia duoti sarasa objektu, kuris nebuti tuscias.')
    }
    let objectsOnly = true;
    for ( let i=0; i<data.length; i++ ) {
        if ( typeof(data[i]) !== 'object' ) {
            objectsOnly = false;
            break;
        }
    }
    if ( !objectsOnly ) {
        return console.error('Treciasis parametras: sarasa turi sudaryti tik objektai.');
    }
    
    if ( !isFinite(countPerPage) ||
         typeof(countPerPage) !== 'number' ) {
        return console.error('Ketvirtasis parametras: reikia nurodyti po kelis elementus atvaizduoti per puslapiavima (validus skaicius).');
    }
    if ( countPerPage < 1 ||
         countPerPage % 1 !== 0 ||
         [1, 2, 3, 4].indexOf(countPerPage) === -1 ) {
        return console.error('Ketvirtasis parametras: reikia nurodyti po kelis elementus atvaizduoti per puslapiavima ir ju turi buti sveikas teigiamas skaicius.');
    }
    
    // generuojame HTML
    let HTML = '';
    const pageCount = Math.ceil(data.length / countPerPage);
    let listHTML = '';
    let pageHTML = '';
    let circlesHTML = '';

    for ( let i=0; i<pageCount; i++ ) {
        pageHTML = '';
        for ( let p=0; p<countPerPage; p++ ) {
            const dataIndex = i * countPerPage +  p;
            if ( dataIndex >= data.length ) {
                break;
            }
            pageHTML += renderingFunction(data[dataIndex], 12/countPerPage);
        }

        listHTML += `<div class="page">
                        ${pageHTML}
                    </div>`;
        circlesHTML += `<div class="circle ${i === 0 ? 'active' : ''}"
                            data-index="${i}"></div>`;
    }

    HTML += `<div class="pagination">
                <div class="list">
                    ${listHTML}
                </div>    
                <div class="controls">
                    ${circlesHTML}
                </div>
            </div>`;

    // iterpiame HTML i reikiama vieta
    DOM.innerHTML = HTML;

    // uzregistruojame event listenerius
    const DOMlist = DOM.querySelector('.list');
    const DOMcircles = DOM.querySelectorAll('.controls > .circle');
    for ( let i=0; i<DOMcircles.length; i++ ) {
        DOMcircles[i].addEventListener('click', (event) => {
            // animate list
            const index = parseInt(event.target.dataset.index);
            DOMlist.style.marginLeft = (index * -100) + '%';

            // active circle
            DOM.querySelector('.controls > .circle.active').classList.remove('active');
            event.target.classList.add('active');
        })
    }

    return;
}