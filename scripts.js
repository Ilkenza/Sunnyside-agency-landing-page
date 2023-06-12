const openNav_Button = document.querySelector("#open-mobile-nav-button");
openNav_Button.addEventListener("click", () => {
    const navigation = document.querySelector("#mobile-navigation");
    navigation.classList.toggle("hidden");
});