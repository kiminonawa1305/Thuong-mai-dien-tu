$(document).ready(function(){
    loadCoupon()
})

let a = $('#coupon-id-0').attr(`id`)
// console.log(a)
function loadCoupon() {
    for (let i = 0; i < 5; i++) {
        $(`<div id="coupont-id-${i}" class="coupont-${i} p-3"></div>`).appendTo($('.vouchers'));
        $(`.coupont-${i}`).load('../component/list_of_vouchers.html')
    }

}
function addIDToCoupon() {
    for (let i = 0; i < 5; i++) {
       // console.log($(`.coupont-${i} .accordion-item > .accordion-collapse`).attr('id'))
        $(`.coupont-${i} .accordion-item > .accordion-collapse`).attr('id', `panelsStayOpen-${i}`)
        $(`.coupont-${i} .accordion-button`).attr('data-bs-target','#'+ $(`.coupont-${i} .accordion-item div`).attr('id'))
        $(`.coupont-${i} .accordion-button`).attr('aria-controls', $(`.coupont-${i} .accordion-item div`).attr('id'))

    }
}