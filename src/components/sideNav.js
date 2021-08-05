import React from "react";
// import ReactDOM from "react-dom";

function SideNavbar() {

    function dropdownBtn(e) {
        console.log(e)

        var dropdownContent = e.target.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }

    return (
        <div className="sidenav">
            <div className="logo"><img src="/Assets/Images/logo.svg" alt="logo" /><p>TermMonitor</p></div>
            <a href="#" className="active"><i class="fas fa-home"></i>Add Keywords</a>
            <a href="#"><i class="fas fa-user-friends"></i>Matches</a>
            <a href="#"><i class="fas fa-folder"></i>Manage Sources</a>
            <a href="#"><i class="fas fa-folder"></i>Integration</a>
            <a href="#"><i class="fas fa-folder"></i>Alerts</a>
            <button className="dropdown-btn" onClick={dropdownBtn}><i class="fas fa-star"></i>Settings
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-container">
                <a href="#">Billings</a>

            </div>

        </div>
    )

}

export default SideNavbar;