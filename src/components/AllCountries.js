
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';

function AllCountries() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            if (res.status === 200) {
                setData(res.data)
            }
            setLoading(false)
        })

    }, []);


    // Search
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)

    }

    const searchCountries = data.filter(item => {
        return item.name.official.toLowerCase().includes(search.toLowerCase()) || item.name.common.toLowerCase().includes(search.toLowerCase())

    })

    // Search End



    let page_load = '';
    if (loading) {
        page_load = <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        page_load = <div className='row'>
            <div className='mb-5'>
                <h4>Live Search</h4>
                <form className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                    <input value={search} className="form-control me-2" onChange={handleSearch} type="search" placeholder="Enter Country" aria-label="Search" />
                </form>

            </div>

            {
                searchCountries.map((item, id) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-12 container' key={id}>
                            <div
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            >
                            </div>

                            <div className=''>
                                <div className="card mb-5 text-black" style={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                                    <div><h5 className="card-title m-3">{item.name.common}</h5></div>
                                    <img src={item.flags.png} className="card-img-top" alt="..." style={{ width: "100%", height: "15rem" }} />

                                    <div className="card-body">
                                        <h6 className='card-text'>Official Name : <strong>{item.name.official}</strong></h6>
                                        <h6 className='card-text'>Capital : <strong>{item.capital}</strong></h6>
                                        <h6 className='card-text'>Continent : <strong>{item.region}</strong></h6>
                                        <h6 className='card-text'>Subregion : <strong>{item.subregion}</strong></h6>
                                        <h6 className='card-text'>Population : <strong>{item.population.toLocaleString()}</strong></h6>
                                        <hr />
                                        <h6 className='card-text'>Time Zone : {item.timezones}</h6>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div >
    }

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
                {page_load}
            </div>
        </div>
    )

}

export default AllCountries;
