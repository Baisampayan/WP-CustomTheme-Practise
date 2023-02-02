import $ from 'jquery';

// Displaying the child menu
$('.c-navigation').on('mouseenter', '.menu-item-has-children', (e) => {
    if(!$(e.currentTarget).parent('.sub-menu').length) {
        $('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
    }
    $(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', (e) => {
    $(e.currentTarget).removeClass('open');
})

// Adding the JavaScript for the accessibility
$('.c-navigation').on('click', '.menu .menu-button', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let menuButton = $(e.currentTarget);
    let menuLink = menuButton.parent();
    let menuItem = menuLink.parent();
    if(menuItem.hasClass('open')) {
        menuItem.add(menuItem.find('.menu-item .open')).removeClass('open');
        menuLink.add(menuItem.find('a')).attr('aria-expanded', 'false');
        menuButton.find('.menu-button-show').attr('aria-hidden', 'false');
        menuButton.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menuItem.siblings('.open').find('>a>.menu-button').trigger('click');
        menuItem.addClass('open');
        menuLink.attr('aria-expanded', 'true');
        menuButton.find('.menu-button-show').attr('aria-hidden', 'true');
        menuButton.find('.menu-button-hide').attr('aria-hidden', 'false');
    }
});

$(document).click((e) => {
    if($('.menu-item.open').length) {
        $('.menu > .menu-item.open > a > .menu-button').trigger('click');
    }
});