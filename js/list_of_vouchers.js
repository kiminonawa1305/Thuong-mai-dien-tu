$(document).ready(function () {

})

function showAccordion() {
    let toggleCollapsed = false
    const accordionBtn = $('.accordion-button')

    accordionBtn.click(function () {
        console.log($(this))
        $(this).toggleClass('changed');
        if (!toggleCollapsed) {
            toggleCollapsed = true
            $(this).attr('data-bs-toggle', "")
            return
        }
        $(this).addClass('collapsed').attr('aria-expanded', false)
        $('#collapse_coupon_desc').removeClass('show')
        $(this).attr('data-bs-toggle', "collapse")

        toggleCollapsed = false
    })
}