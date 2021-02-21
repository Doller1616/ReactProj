import { CreateRows4Grid } from './createRows4Grid'
export function filterDDItems(inputValue, HtmlItems) {

  for (let i = 0; i < HtmlItems.length; i++) {
    let txtValue = HtmlItems[i].textContent || HtmlItems[i].innerText;
    if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
      HtmlItems[i].style.display = "block";
    } else {
      HtmlItems[i].style.display = "none";
    }
  }
}

//Filter Grid as pre conditions
export function filterGrid(that, filterBy, dataArr, filterGridCb) {

  let { whatsAppNo, tempName, interId, durat, noOfrows } = filterBy
  let collectHtmlRows = []

  console.log("dataArr",dataArr);

  collectHtmlRows = dataArr.reduce((preVal, data, i) => {

    let whatsAppNoflag = whatsAppNo === "All" ? true : (whatsAppNo === data.whatsAppNo ? true : false);
    let tempNameflag = tempName === "All" ? true : (tempName === data.template ? true : false)
    let interIdflag = interId === "All" ? true : (interId === data.interpriseId ? true : false)
    let duratflag = durat === data.duration ? true : false;
    let limit = preVal.length < noOfrows
    console.log("ccccc",interId,"--",data.interpriseId);
    console.log(interIdflag , whatsAppNoflag , tempNameflag , duratflag,limit,preVal.length, '<', noOfrows,dataArr.length);
    return (interIdflag && whatsAppNoflag && tempNameflag && duratflag && limit ?
    [...preVal, <tr key={'grid' + i}>
      <td>{data.interpriseId}</td>
      <td>{data.notification.submitted}</td>
      <td>{data.notification.read}</td>
      <td>{data.notification.uniqueUser}</td>
      <td>{data.conversations.requests}</td>
      <td>{data.conversations.responsive}</td>
      <td>{data.conversations.uniqueUser}</td>
    </tr>] : preVal)
  }, [])

  
//   for (let i = 0; i < dataArr.length; i++) {
//     const data = dataArr[i];
   
//     let whatsAppNoflag = whatsAppNo === "All" ? true : whatsAppNo == data.whatsAppNo ? true : false;
//     let tempNameflag = tempName === "All" ? true : tempName === data.template ? true : false
//     let interIdflag = interId === "All" ? true : interId === data.interpriseId ? true : false
//     let duratflag = durat === data.duration ? true : false;
//     let limit = collectHtmlRows.length < noOfrows

//     console.log(interIdflag , whatsAppNoflag , tempNameflag , duratflag,"ooo",limit,dataArr.length);
// if(interIdflag === true && whatsAppNoflag === true && tempNameflag === true && duratflag === true){

//    collectHtmlRows = [...collectHtmlRows, <tr key={'grid' + i}>
//       <td>{data.interpriseId}</td>
//       <td>{data.notification.submitted}</td>
//       <td>{data.notification.read}</td>
//       <td>{data.notification.uniqueUser}</td>
//       <td>{data.conversations.requests}</td>
//       <td>{data.conversations.responsive}</td>
//       <td>{data.conversations.uniqueUser}</td>
//     </tr>]
//     }
//   }



  return filterGridCb(that, collectHtmlRows)

}


export function getCurrentData() {
  //Initilize Current Data
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();

  let mon = m.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  let dat = d.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })

  return dat + "-" + mon + "-" + y
}


