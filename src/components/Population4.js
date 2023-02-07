import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';


function Population4() {
    
      const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const baseUrl = 'https://restcountries.com/v3.1/all'

    useEffect(() => {
        axios.get(baseUrl).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                setData(res.data)
            }
            setLoading(false)
        })
    }, [])

    const filterData = data.filter(item => {
        return item.population >= 100000000
    })

    let page_load = '';
    if (loading) {
        page_load = <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
        page_load = <div className='row'>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <h2 className='mt-5'> Countries with Population Above 100 Million</h2>
            
            {
                filterData.map((item, id) => {
                    return (
                        <div className='col-lg-6 col-md-6 col-sm-12 container' key={id}>
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
                            <div className='mt-5'>
                                <h6 className='card-text'>{item.status}</h6>
                                <div className="card text-black m-3" style={{ width: "100%" }}>
                                    <div><h5 className="card-title m-3">{item.name.official}</h5></div>
                                    <img src={item.flags.png} className="card-img-top" alt="..." style={{ width: "100%", height: "15rem" }} />
                                    <div className="card-body">
                                        <h6 className='card-text'>Regoin : {item.continents}</h6>
                                        <h6 className='card-text'>Population : {item.population}</h6>
                                        <h6 className='card-text'>Time Zone : {item.timezones}</h6>
                                        <h6 className='card-text'>Subregion : {item.subregion}</h6>
                                        <hr />
                                        <p className='card-text d-flex justify-content-start'> <i class="automotive-van" /> {item.car.side}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    }

    return (
        <div className='container'>
            {page_load}

        </div>
    )
}

export default Population4;
