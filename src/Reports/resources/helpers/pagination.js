
export function ActivePage (htmlElementsArr, activeClassName) {

    for (let i = 0; i < htmlElementsArr.length; i++) {
      htmlElementsArr[i].addEventListener("click", function() {
      let current = document.getElementsByClassName(activeClassName);
      current[0].className = current[0].className.replace([" "+activeClassName], "");
      this.className += [" "+activeClassName];
      });
    }
}
