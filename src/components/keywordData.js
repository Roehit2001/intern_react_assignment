const KeywordData = ({ apiData }) => {
    // console.log(apiData)
    if (apiData.length === 0) {
        return (
            <tbody><tr><td>Loading..</td><td>Loading..</td><td>Loading..</td><td>Loading..</td><td><button></button></td></tr></tbody>
        )
    }
    return (
        <tbody>
            {
                apiData.data.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className="keyword_col1 pl-5">{item.keyword} <i class="fas fa-search"></i></td>
                            <td>{item.goal}</td>
                            <td>{item.matches}</td>
                            <td>{item.search_status}</td>
                            <td><button></button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}
export default KeywordData