"use strict";

// header

// hero

// about me

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
    
    return document.querySelector('#services').innerHTML = HTML;
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
                    <a class="date" href="#/posts-by-date/${dateLink}">${formatedDate}</a>
                    <a class="title" href="${post.link}">${post.title}</a>
                    <p>${post.description}</p>
                    <a class="more" href="${post.link}">Learn more</a>
                </div>`;
    }

    return document.querySelector('#blog').innerHTML = HTML;
}

// contact us

// maps

// footer

