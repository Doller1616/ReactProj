
export function CreateRows4Grid(data){
    let dataArr = data
    let collectRows = []

    for (let i = 0; i < dataArr.length; i++) {
        const data = dataArr[i];
        collectRows = [...collectRows, 
        <tr key={'grid'+i}>
            <td>{data.interpriseId}</td>
            <td>{data.notification.submitted}</td>
            <td>{data.notification.read}</td>
            <td>{data.notification.uniqueUser}</td>
            <td>{data.conversations.requests}</td>
            <td>{data.conversations.responsive}</td>
            <td>{data.conversations.uniqueUser}</td>
        </tr>]
    }

    return collectRows
}
