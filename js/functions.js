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
        HTML += `<div class="service">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }
    
    return document.querySelector('#services').innerHTML = HTML;
}

// team

// numbers

// pricing

// blog

// contact us

// maps

// footer

