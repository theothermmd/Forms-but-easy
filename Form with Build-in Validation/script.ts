document.addEventListener("DOMContentLoaded", () => {
  // This rrow function will run after created DOM and render is finished.
  const form = document.getElementById("myform") as HTMLFormElement; // selecet our form with ID
  /* What is HTMLFormElement for? 
  When you select an element, TypeScript defaults to HTMLElement, but we need the HTMLFormElement type to create FormData. */
  form.addEventListener("submit", (event) => {
    // This arrow function is executed when the submit button is clicked.
    event.preventDefault(); // Prevents the browser's default behavior of refreshing the page.
    const formdata = new FormData(form);
    const data: Record<string, string> = {};
    formdata.forEach((value, key) => {
      data[key] = value.toString();
    });
    console.log(JSON.stringify(data));
  });
});