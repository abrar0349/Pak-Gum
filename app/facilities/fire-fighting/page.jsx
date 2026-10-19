import Heading from '../Component/Heading'
import BulletList from '../Component/BulletList'
import CardGrid from '../Component/CardGrid'


import './fire-fighting.css'

// image importing 
import F1 from '../../Images/facilities/Store_in_faci/F1.png'
import F2 from '../../Images/facilities/Store_in_faci/F2.png'
import F3 from '../../Images/facilities/Store_in_faci/F3.png'
import F4 from '../../Images/facilities/Store_in_faci/F4.png'



function page() {
     const FireData = [
          { id: 1, imageSrc: F1.src, altText: "Physical Lab", title: "Fire Hose Box"},
          { id: 2, imageSrc: F2.src, altText: "Micro Lab", title : "Fire Hydrant Pipeline"  },
          { id: 3, imageSrc: F3.src, altText: "Chemical Lab", title: "Fire Hydrant System" },
        ];

  return (
    <div className='fire-container'>

      <Heading Content={'Fire Fighting System'} />

      <BulletList items={[
          "Auto start fire hydrant system. Pressure is maintained in pipelines",
          "Regular monitoring ensures proper functionality",
          "Training for fire fighting is provided to all personnel irrespective of age or sex",
          "Regular simulations and drills are carried out to ensure equipment is functional and personnel are adequately trained",
        ]} />

      <CardGrid arr={FireData}/>

      <div className="fire-image-wrapper">
          <img 
            src= {F4.src}
            alt="Quality Control Process - Sampling & Inspection" 
            className="fire-process-img"
          />
          <div className="fire-card-title">Fire Drills & fire fighting training</div>
      </div>

    </div>
  )
}

export default page
