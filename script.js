const openEL = document.getElementById('openEL');
const closeEL = document.getElementById('closeEL');
const navEls =  document.querySelector('nav')

openEL.addEventListener('click', () => {
    navEls.style.display = "flex";
    openEL.style.display = "none";
    closeEL.style.display = "block"
});

closeEL.addEventListener('click', () => {
    navEls.style.display = "none";
    openEL.style.display = "block";
    closeEL.style.display = "none";
})

//getting items
const orderbtnELs = document.querySelectorAll("#order-btn");
const cartItems =[]

orderbtnELs.forEach((orderBtn) => {
    orderBtn.addEventListener("click", () => {
        const parentEl = orderBtn.parentElement;
        const item = {
            image: parentEl.querySelector("img").src,
            price: parentEl.querySelector("#price").innerHTML,
            name: parentEl.querySelector("#name").innerHTML,
        };

        cartItems.unshift(item);
        console.log(cart);
        
    });
});
