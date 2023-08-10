// import logo from './logo.svg';
// import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './main-page.css'
import Header from './header'
import FeaturedHouse from './featured-house'
import SearchResults from '../search-results'
import HouseFilter from './house-filter'
import HouseFromQuery from '../house/HouseFromQuery'
import useHouses from '../hooks/useHouse'
import useFeaturedHouse from '../hooks/useFeaturedHouse'
import HousesContext from '../context/houseContext'

function App() {
  // const [allHouses, setAllHouses] = useState([])

  // useEffect(() => {
  //   const fetchHouses = async () => {
  //     const rsp = await fetch("/houses.json")
  //     const houses = await rsp.json()
  //     setAllHouses(houses)
  //   }
  //   fetchHouses()
  // }, [])

  // const featuredHouse = useMemo(() => {
  //   if (allHouses.length) {
  //     const randomIndex = Math.floor(Math.random() * allHouses.length)
  //     return allHouses[randomIndex]
  //   }
  // }, [allHouses])

  // ******* Custom Hooks
  const allHouses = useHouses()
  const featuredHouse = useFeaturedHouse(allHouses)

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />

          <HouseFilter />

          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>

            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>

            <Route path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
  )
}

export default App
