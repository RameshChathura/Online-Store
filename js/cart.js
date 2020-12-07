document.addEventListener('DOMContentLoaded', function () {
    const cartView = document.getElementById('cartView');

    loadCart();

    function remove(e) {
        const index = e.target.dataset.index;
        var localdb = localStorage.getItem('cartList');
        var cartList = [];

        if (localdb) cartList = JSON.parse(localdb);

        cartList.splice(index, 1);

        localStorage.setItem('cartList', JSON.stringify(cartList));
        loadCart();

    }

    function loadCart() {
        var localdb = localStorage.getItem('cartList');
        var cartList = [];
        var html = "";
        var total = 0;
        if (localdb)
            cartList = JSON.parse(localdb);

        for (let i in cartList) {
            let c = cartList[i];
            total += parseFloat(c.price);
            html += `<tr>
                        <td class="col-md-6">${c.item}</td>
                        <td class="col-md-4 text-right">${c.price}</td>
                        <td class="col-md-2 text-center"><button class="btn btn-danger btn-remove" data-index=${i}><i class="fa fa-trash text-light" aria-hidden="true"></i></button></td>
                    </tr>`
            //html += `<a href="#" class="list-group-item">${c.item} <span class="badge">${c.price}</span><</a>`;
        }
        html += `<tr>
                <td class="col-md-6">TOTAL</td>
                <td class="col-md-4 text-right">${total}</td>
                <td class="col-md-2></td>
            </tr>`;
        cartView.innerHTML = html;

        const btnRemove = document.getElementsByClassName('btn-remove');

        for (c of btnRemove)
            c.addEventListener('click', remove);

    }

})
