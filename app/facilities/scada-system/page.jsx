import Heading from '../Component/Heading'
import BulletList from '../Component/BulletList'
import { Card } from '../Component/Card'

import './ScadaSystem.css'

// image importing 
import SD1 from '../../Images/facilities/Store_in_faci/SD1.png'
import SD2 from '../../Images/facilities/Store_in_faci/SD2.jpg'
import SD3 from '../../Images/facilities/Store_in_faci/SD3.jpg'

function page() {
  return (
    <div className='scada-container'>

      <Heading Content={'RO plant, Water filters and Air filters'} />

      <BulletList items={[
          "Computer controlled machinery",
          "Process control parameters are monitored by trained personnel as well as computers",
          "Statistical Process Control (SPC) techniques used to ensure processes are in control",
        ]} />

        <div className='scada-banner'>
            <Card
              key={1}
              imageSrc={SD1.src}
              altText={"khan"}
            />
            <Card
              key={2}
              imageSrc={SD2.src}
              altText={"khan"}
            />
            <Card
              key={3}
              imageSrc={SD3.src}
              altText={"khan"}
            />
        </div>

    </div>
  )
}

export default page
