$(document).ready(function(){
    loadCoupon()
})

function loadCoupon() {
        $(`.vouchers`).load('../component/list_of_vouchers.html')
}