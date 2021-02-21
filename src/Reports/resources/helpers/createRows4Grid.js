
export function CreateRows4Grid(dataArr, currentDate, rowLimit) {
    
    let collectRows = []
    collectRows = dataArr.reduce((preVal, data, i) => {
        let limit = (preVal.length) < rowLimit
        // console.log("Initilize",currentDate , data.duration,limit,preVal.length,"<",rowLimit);
        return (currentDate == data.duration  && limit ?
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

    return collectRows
}
