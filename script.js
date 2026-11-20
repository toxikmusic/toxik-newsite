function toggleNav() {
    const nav = document.querySelector(".nav");
    const current = nav.getAttribute("hidden");
    nav.setAttribute("hidden", current === "true" ? "false" : "true");
}
