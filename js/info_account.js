$(document).ready(function(){
    const menuItems = $('.menu-personal__items .item')
    $('header').load('layout/header.html');
    $('footer').load('layout/footer.html');
    $('.display-categories').load('layout/purchase_history.html')
    addEventClick(menuItems)
})

function addEventClick(items) {
    items.on('click',function (){
        items.removeClass('active')
        $(this).addClass('active')
    })
}