import Heading from '../Component/Heading'
import BulletList from '../Component/BulletList'


import './backup-power.css'

// image importing 
import g1 from '../../Images/facilities/Store_in_faci/g1.png'


function page() {
  return (
    <div className='backup-container'>

      <Heading Content={'Backup Power Generation and SNG Systems'} />

      <BulletList items={[
          "On-site Power Generators provide adequate power to run the entire plant in the event of power breakdowns",
          "On-site SNG plant generates enough gas to ensure that the entire plant can run in the event of a natural gas outage",
        ]} />

        {/* Single Image Banner for Sampling Process Flow */}
        <div className="backup-image-wrapper">
          <img 
            src= {g1.src}
            alt="Quality Control Process - Sampling & Inspection" 
            className="backup-process-img"
          />
        </div>

    </div>
  )
}

export default page
