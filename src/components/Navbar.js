import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg fixed-top header">
                <div className="container-fluid">
                    <Link to="/" href="/" className="navbar-brand d-flex align-items-center col-lg-3 col-md-3 col-sm-6">
                        <h1>Explore</h1>
                    </Link>

                    <select class="form-select" aria-label="Default select example">
                        <option defaultValue>Filter Countries by Population</option>
           
                        <option value="1">Population Under 10M</option>
    
                        <option value="2">Population between 10M - 50M</option>
                        <option value="3">Population between 50M - 100M</option>
                        <option value="3">Population above 100M</option>
                    </select>
                </div>
            </nav>
        </div>
    )
}

// value={search} onChange={handleSearch}
// onClick={HandleSearchCountry}

export default Navbar
