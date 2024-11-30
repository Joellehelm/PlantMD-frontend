import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import PlantCard from './plants/plantCard'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { SvgIcon } from '@mui/material';


function HomePage(props) {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(process.env.REACT_APP_PLANT_API_KEY)
    // fetch(`https://perenual.com/api/species-list?key=${process.env.REACT_APP_PLANT_API_KEY}`, {
    //   method: "GET",
    // })
    //   .then(r => r.json())
    //   .then(response => {
    //     console.log('~~~~~~~~~~~~~~~ FETCH HAPPening')
    //     console.log(response.data)
    //     console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
    //     setPlants(response.data);
    //   }).catch(err => console.log(err))


    // const newPlants = [{ id: 23234424, common_name: 'snake plant' }, { id: 24334, common_name: 'fern' }]

    // setPlants(plants => ([...plants, ...newPlants]));
    // setPlants(plants => ([...plants, ...newPlants]));


    // fetch(`https://perenual.com/api/species/details/7?key=${process.env.REACT_APP_PLANT_API_KEY}`, {
    //   method: "GET",
    // })
    //   .then(r => r.json())
    //   .then(response => {
    //     console.log(response)
    //   }).catch(err => console.log(err))

    // fetch(`https://perenual.com/api/pest-disease-list?key=${process.env.REACT_APP_PLANT_API_KEY}`, {
    //   method: "GET",
    // })
    //   .then(r => r.json())
    //   .then(response => {
    //     console.log(response)
    //   }).catch(err => console.log(err))
  }, []);

  const mapPlants = () => {
    console.log('HELLO')
    if (plants.length > 0) {
      return plants.map((p) => < PlantCard key={p.id} data={p} />)
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    fetch(`https://perenual.com/api/species-list?key=${process.env.REACT_APP_PLANT_API_KEY}&q=${search}`, {
      method: "GET",
    })
      .then(r => r.json())
      .then(response => {
        setPlants(response.data);
      }).catch(err => console.log(err))
  }


  return <>
    <div className='home-page-container'>
      <div className='page-title'>
        Welcome {props.user.name}, you can search for plants here.
      </div>
      <div className='search-container'>
        <TextField id="search-box" variant="standard" onChange={handleChange} />
        <SvgIcon className='search-icon' onClick={handleClick}>
          <SearchIcon />
        </SvgIcon>
      </div>
      <div className='plant-card-container'>
        {mapPlants()}
      </div>
    </div>
  </>
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(HomePage);