/*jshint esversion: 6 */
let isPromoApplied = false;
document.getElementById("ram-option-1").addEventListener('click', function () {
    document.getElementById("extra-memory-cost").innerText = '0';
    totalCost();
});
document.getElementById("ram-option-2").addEventListener('click', function () {
    document.getElementById("extra-memory-cost").innerText = '180';
    totalCost();
});
document.getElementById("storage-option-1").addEventListener('click', function () {
    document.getElementById("extra-storage-cost").innerText = '0';
    totalCost();
});
document.getElementById("storage-option-2").addEventListener('click', function () {
    document.getElementById("extra-storage-cost").innerText = '100';
    totalCost();
});
document.getElementById("storage-option-3").addEventListener('click', function () {
    document.getElementById("extra-storage-cost").innerText = '180';
    totalCost();
});
document.getElementById("delivery-option-1").addEventListener('click', function () {
    document.getElementById("extra-delivery-cost").innerText = '0';
    totalCost();
});
document.getElementById("delivery-option-2").addEventListener('click', function () {
    document.getElementById("extra-delivery-cost").innerText = '20';
    totalCost();
});
document.getElementById("promo-code-apply-btn").addEventListener('click', function () {
    const promoCode = document.getElementById("input-promo-code").value;
    console.log(promoCode);
    document.getElementById("input-promo-code").value = '';
    applyPromoCode(promoCode);
    document.getElementById("input-promo-code").value = '';

});
function totalCost() {
    const bestPrice = parseFloat(document.getElementById("best-price").innerText);
    const extraMemoryCost = parseFloat(document.getElementById("extra-memory-cost").innerText);
    const ExtraStorageCost = parseFloat(document.getElementById("extra-storage-cost").innerText);
    const extraDeliveryCHarge = parseFloat(document.getElementById("extra-delivery-cost").innerText);
    document.getElementById("total-price").innerText = (bestPrice + extraMemoryCost + ExtraStorageCost + extraDeliveryCHarge).toString();
    document.getElementById("final-price").innerText = (bestPrice + extraMemoryCost + ExtraStorageCost + extraDeliveryCHarge).toString();
    isPromoApplied = false;
}
function applyPromoCode(code) {
    if (code === 'stevekaku' && isPromoApplied===false)
    {
        isPromoApplied = true;
        const totalCost = parseFloat(document.getElementById("final-price").innerText);
        const finalCost =totalCost-(totalCost*0.2);
        document.getElementById("final-price").innerText=finalCost.toString();
    }
}


