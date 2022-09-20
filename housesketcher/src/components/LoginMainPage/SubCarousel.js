import CardPanel from './CardPanel'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/Logo.png'
import { useEffect } from 'react'
import { useState } from 'react'
import LikeFurniture from '../Like/LikeFurniture'


function SubCarousel(props) {
  const [populars, setPopulars] = useState([])
  const getPopulars = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    )
    const json = await response.json();
    setPopulars(json.data.movies);
  }

  useEffect(() => {
    getPopulars();
  }, [])
  // console.log(populars)
  return (
    <div style={{ maxWidth: 1500, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <h1>popular</h1>
      <br />
      <CardPanel
        show={4}
        populars={populars}
      >
          {populars.map((popular) => (
            <LikeFurniture popular = {popular}>              
            </LikeFurniture>
          ))}
        {/* <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
            <h1>블라블라</h1>
          </div>
        </div>
        <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
            <h1>블라블라</h1>
          </div>
        </div>
        <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
            <h1>블라블라</h1>
          </div>
        </div>
        <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 20 }}>
            <img src={logo} alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div> */}
      </CardPanel>
    </div>
  )
}

export default SubCarousel