import Heading from '../Component/Heading'
import BulletList from '../Component/BulletList'
// import CardGrid from '../Component/CardGrid'
import RoCardGrid from './RoCardGrid'

// images imported
import RO1 from '../../Images/facilities/Store_in_faci/RO1.png'
import RO2 from '../../Images/facilities/Store_in_faci/RO2.png'
import RO3 from '../../Images/facilities/Store_in_faci/RO3.png'


import './plant.css'
function page() {
    
        const LabData = [
          { id: 1, imageSrc: RO1.src, altText: "Physical Lab", title: "RO Water Treatment Plant" },
          { id: 2, imageSrc: RO2.src, altText: "Micro Lab", title: "Micro Water Filtration Canisters" },
          { id: 3, imageSrc: RO3.src, altText: "Chemical Lab", title: "Industrial Air Filtration System" },
        ];

  return (
    <div className='plant-container'>
      <Heading Content={'RO plant, Water filters and Air filters'} />

      <BulletList items={[
          "RO and water filters, ensure that water used in the plant is fit for human consumption",
          "Air filters ensure that the air is free of dust in the drying and transport lines",
        ]} />

      {/* <CardGrid arr={LabData}/> */}
      <RoCardGrid />


    </div>
  )
}

export default page
