$(document).ready(function () {
    let toggleCollapsed = false
    const accordionBtn = $('.accordion-button')
    accordionBtn.toggleClass('changed');
    accordionBtn.click(function () {
        if (!toggleCollapsed) {
            toggleCollapsed = true
            $('.accordion-button').attr('data-bs-toggle', "")
            return
        }
        accordionBtn.addClass('collapsed').attr('aria-expanded', false)
        $('#collapse_coupon_desc').removeClass('show')
        accordionBtn.attr('data-bs-toggle', "collapse")

        toggleCollapsed = false
    })
})