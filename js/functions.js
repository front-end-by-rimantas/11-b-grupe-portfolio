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

// about me
function renderSkills( list ) {
    let HTML = '';

    for ( let i=0; i<list.length; i++ ) {
        const skill = list[i];
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="label">${skill.title}</div>
                        <div class="value">${skill.value}%</div>
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

// portfolio

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
function renderBlog( list ) {
    let HTML = '';

    if ( !Array.isArray(list) ) {
        return console.error('ERROR: duok sarasa...');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: sarasas negali buti tuscias...');
    }
    
    for ( let i=0; i<list.length; i++ ) {
        const post = list[i];
        
        const pd = post.date;
        const dateLink = `${pd.year}/${pd.month}/${pd.day}`;
        const year = new Date().getFullYear();
        let formatedDate = `${pd.day} ${months[pd.month-1]}`;
        if ( year !== pd.year ) {
            formatedDate += `, ${pd.year}`;
        }

        HTML += `<div class="blog col-4 col-md-6 col-sm-12">
                    <img src="./img/blog/${post.photo.src}" alt="${post.photo.alt}">
                    <a class="date bg-primary" href="#/posts-by-date/${dateLink}">${formatedDate}</a>
                    <a class="title" href="${post.link}">${post.title}</a>
                    <p>${post.description}</p>
                    <a class="more" href="${post.link}">Learn more</a>
                </div>`;
    }

    return document.querySelector('#blog_list').innerHTML = HTML;
}

// contact us

// maps

// footer

