const variants = document.querySelectorAll('.product-variant');

const articleElement = document.querySelector('#article');
const priceElement = document.querySelector('#price');
const oldPriceElement = document.querySelector('#old-price');
const cartButton = document.querySelector('#add-to-cart');


function formatPrice(value) {
    return `${Number(value).toLocaleString('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ₽`;
}


function updateProduct(variant) {
    const {
        article,
        price,
        oldPrice
    } = variant.dataset;

    articleElement.textContent = article;
    priceElement.textContent = formatPrice(price);
    oldPriceElement.textContent = formatPrice(oldPrice);

    variants.forEach((item) => {
        const isActive = item === variant;

        item.classList.toggle(
            'product-variant--active',
            isActive
        );

        item.setAttribute(
            'aria-pressed',
            isActive
        );
    });
}


variants.forEach((variant) => {
    variant.addEventListener('click', () => {
        updateProduct(variant);
    });
});


cartButton.addEventListener('click', () => {
    const defaultText = 'В корзину';

    cartButton.textContent = 'Добавлено';

    setTimeout(() => {
        cartButton.textContent = defaultText;
    }, 1500);
});
