import React, { useState, useEffect } from "react";
import KeywordData from "./keywordData";


function Addkeyword() {

    const [keywords, setKeywords] = useState([]);
    const url = "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard";

    useEffect(() => {
        async function apicall() {
            await fetch(url)
                .then(res => res.text())
                .then(data => {
                    // console.log(data)
                    setKeywords(JSON.parse(data));
                    // console.log(keywords)
                })
                .catch(err => console.log(err));
        }
        apicall()
    }, [])

    return (
        <div className="Addkeyword mt-4">
            <div className="search">
                <p className="heading">Add Another keyword<div className="boxed">1/3</div><div className="caps">UPGRADE</div></p>
                <p className="subheading">Advance search</p>
                <div className="searchbox p-auto mx-auto my-auto">
                    <form >
                        <i className="fas fa-search"></i><input type="text" placeholder="Enter your filters here" />
                        <button>SAVE FILTERS</button>
                    </form>
                </div>
            </div>
            <div className="results">
                <p className="heading">The Terms you are tracking</p>
                <p className="subheading">The data will refresh every 5 min</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="keyword_head pl-5" scope="col">Keywords</th>
                            <th className="goal_head" scope="col">Goal</th>
                            <th className="match_head" scope="col">Matches</th>
                            <th className="search_head" scope="col">Search Status</th>
                            <th className="delete_head" scope="col">Delete keyword</th>
                        </tr>
                    </thead>
                    <KeywordData apiData={keywords} />

                </table>
            </div>
            <div className="viewResults ">
                <button>view Results</button>
            </div>
        </div>



    )


}

export default Addkeyword;