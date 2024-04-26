$(document).ready(function () {
    cloneAccordionItem()
    addEventAccordion()
   showAccordionActive()
})

function addEventAccordion() {
    const coupons = $('.coupon-item')
    coupons.each(function (index) {
        $(this).find(".accordion-collapse").each(function () {
            $(this).attr('id', `penalStayOpen-${index}`)
        });
        $(this).find(".accordion-button").each(function () {
            $(this).attr('data-bs-target', `#penalStayOpen-${index}`)
            $(this).attr('aria-controls', `penalStayOpen-${index}`)
        });
    });
}

function cloneAccordionItem() {
    for (let i = 0; i < 5; i++) {
        const cloneCoupon = $('.coupon-item:first').clone()
        $('.list-coupons').append(cloneCoupon)
    }
}

function showAccordionActive() {
    $('.accordion-button').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            $(this).addClass('collapsed')
            $(this).attr('aria-expanded', 'false')
            $(this).parents('.accordion-item').find('.accordion-collapse').removeClass('show')
            $(this).attr('data-bs-toggle', 'collapse')
        }else{
            $(this).addClass('active')
            $(this).toggleClass('changed')
            $(this).attr('data-bs-toggle', '')
        }
    })
    return $('.accordion-button.active').map(function () {return this.className}).get()
}