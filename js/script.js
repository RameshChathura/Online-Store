document.addEventListener('DOMContentLoaded', function () {
    const btnAddCart = document.getElementsByClassName('btn-add-cart');

    for (let e of btnAddCart)
        e.addEventListener('click', onAddToCart);

    function onAddToCart(e) {
        var localdb = localStorage.getItem('cartList');
        var cartList = [];
        if (localdb)
            cartList = JSON.parse(localdb);

        var data = {
            'item': e.target.dataset.item,
            'price': e.target.dataset.price
        }
        cartList.push(data);
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }

});