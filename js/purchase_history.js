$(document).ready(function(){
    const menuItems = $('.menu-personal__items .item')
    $('header').load('layout/header.html');
    $('footer').load('layout/footer.html');
    addEventClick(menuItems)
})

function addEventClick(items) {
    console.log('addEventClick')
    items.on('click',function (){
        items.removeClass('active')
        $(this).addClass('active')
    })
}