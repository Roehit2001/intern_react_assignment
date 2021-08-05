import React from "react";

function TopNav() {
    return (
        <div className="topnav">
            <a href="#home">Keywords</a>
            <div className="r8">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" aria-label="Search" />
                    <button className=" my-2 my-sm-0" type="submit">Search <i class="fas fa-arrow-right"></i></button>
                </form>
                <div className="user mx-auto my-auto"><p>A</p></div>
            </div>
        </div>
    )
}

export default TopNav