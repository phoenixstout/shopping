import { Link } from 'react-router-dom'
import '../stylesheets/Shop.css'
import Navbar from './Navbar'

function Shop() {

  return (
    <>
    <Navbar />
     <div>Da shop</div>
     <Link to={'./Cart'}>Link</Link>
    </>
  )
}

export default Shop
