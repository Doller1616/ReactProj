
export function filterDDItems(inputValue,HtmlItems) {

    for (let i = 0; i < HtmlItems.length; i++) {
        let txtValue = HtmlItems[i].textContent || HtmlItems[i].innerText;
        if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
          HtmlItems[i].style.display = "block";
        } else {
          HtmlItems[i].style.display = "none";
        }
      }
}
