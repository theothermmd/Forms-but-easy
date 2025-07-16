"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formdata = new FormData(form);
        const data = {};
        formdata.forEach((value, key) => {
            data[key] = value.toString();
        });
        window.alert(JSON.stringify(data));
    });
});
