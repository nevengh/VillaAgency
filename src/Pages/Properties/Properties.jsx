import './Properties.css'
import Head from '../../Components/Head/Head'
import VillasCard from '../../Components/VillasCard/VillasCard'
import property01 from '../../assets/images/property-01.jpg'
import property02 from '../../assets/images/property-02.jpg'
import property03 from '../../assets/images/property-03.jpg'
import property04 from '../../assets/images/property-04.jpg'
import property05 from '../../assets/images/property-05.jpg'
import property06 from '../../assets/images/property-06.jpg'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
const Properties = () => {
    const Villascard =[
        {
            id:1,
            image:property01,
            brand :'Luxary Villa',
            price:'$2.264.000',
            bed:'Bathrooms :',
            numberbed:'8',
            area:'Area :',
            areaspace:'545 m2',
            FLoor:'Floors :',
            floornumb:'3',
            parking:'Parking :',
            parkingnum:'6 spots',
    
        },
        {
            id:2,
            image:property02,
            brand :'Luxary Villa',
            price:'$2.264.000',
            bed:'Bathrooms :',
            numberbed:'8',
            area:'Area :',
            areaspace:'545 m2',
            FLoor:'Floors :',
            floornumb:'3',
            parking:'Parking :',
            parkingnum:'6 spots',
    
        },
        {
            id:3,
            image:property03,
            brand :'Luxary Villa',
            price:'$2.264.000',
            bed:'Bathrooms :',
            numberbed:'8',
            area:'Area :',
            areaspace:'545 m2',
            FLoor:'Floors :',
            floornumb:'3',
            parking:'Parking :',
            parkingnum:'6 spots',
    
        },
        {
            id:4,
            image:property04,
            brand :'Luxary Villa',
            price:'$2.264.000',
            bed:'Bathrooms :',
            numberbed:'8',
            area:'Area :',
            areaspace:'545 m2',
            FLoor:'Floors :',
            floornumb:'3',
            parking:'Parking :',
            parkingnum:'6 spots',
    
        },
        {
            id:5,
            image:property05,
            brand :'Luxary Villa',
            price:'$2.264.000',
            bed:'Bathrooms :',
            numberbed:'8',
            area:'Area :',
            areaspace:'545 m2',
            FLoor:'Floors :',
            floornumb:'3',
            parking:'Parking :',
            parkingnum:'6 spots',
    
        },
        {
            id:6,
            image:property06,
            brand :'Luxary Villa',
            price:'$2.264.000',
            bed:'Bathrooms :',
            numberbed:'8',
            area:'Area :',
            areaspace:'545 m2',
            FLoor:'Floors :',
            floornumb:'3',
            parking:'Parking :',
            parkingnum:'6 spots',
    
        },
    
      ]
    const villamap= Villascard.map((e)=>{
        return <VillasCard  key={e.id} image={e.image} brand={e.brand} price={e.price} bed={e.bed} numberbed={e.numberbed} area={e.area} areaspace={e.areaspace} FLoor={e.FLoor} floornumb={e.floornumb} parking={e.parking} parkingnum={e.parkingnum}  />
      })
  return (
    <div className='Properties'>
        <Head links='Properties' headLine='Properties'/>
        <div className="sec-5-options">
            <Link to="#" className='Show-all'>Show All</Link>
            <Link to="#">Appartment</Link>
            <Link to="#">Villa House</Link>
            <Link to="#">Penthouse</Link>
          </div>
        <div className="sec-6-box mt-5">
            {villamap}
        </div>
        <Footer/>
    </div>
  )
}

export default Properties