

function highlightProduct(productId) {
    const productElement = document.getElementById(productId);
    if (productElement) {
        productElement.classList.toggle('highlighted');
    }
}

// Add event listeners to product items
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        product.addEventListener('click', () => {
            highlightProduct(product.id);
        });
    });
});
