$(document).ready(function(){
    for (let i = 0; i < 5; i++) {
        $(`<div class="coupont-${i} p-3"></div>`).appendTo($('.vouchers'));
        $(`.coupont-${i}`).load('../component/list_of_vouchers.html')
    }

})