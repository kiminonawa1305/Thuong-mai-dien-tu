$(document).ready(function(){
    const menuItems = $('.menu-personal__items .item')
    const states = $('.state[data-state]')
    $('header').load('layout/header.html');
    $('footer').load('layout/footer.html');
    addEventClick(menuItems)
    customStateElements(states)
})

function addEventClick(items) {
    items.on('click',function (){
        items.removeClass('active')
        $(this).addClass('active')
    })
}
/*
0. đã hủy (data-state = 0)
1. đang chờ xác nhận (data-state = 1)
2. đã xác nhận (data-state = 2)
3. đang giao hàng (data-state = 3)
4. đã nhận hàng (data-state = 4)
 */
function customStateElements(elements){
    elements.each(function(index, element){
        const state = parseInt($(element).attr('data-state'))

        switch (state) {
            case 0:
                $(element).css('background-color', '#f1aeb5').css('color', '#dc3545')
                break
            case 1:
                $(element).css('background-color', '#e2e3e5').css('color', '#6c757d')
                break
            case 2:
                $(element).css('background-color', '#ffe69c').css('color', '#ffc107')
                break
            case 3:
                $(element).css('background-color', '#9ec5fe').css('color', '#0d6efd')
                break
            case 4:
                $(element).css('background-color', '#a3cfbb').css('color', '#198754')
                break
        }
    })
}