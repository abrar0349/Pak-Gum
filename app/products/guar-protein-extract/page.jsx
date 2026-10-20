import Heading from '../../facilities/Component/Heading'
import Paragraph from '../component/paragraph'
import Div from '../component/Div'
import { Card } from '../../facilities/Component/Card';

import './farm.css'

import ProcessSection from '../component/ProcessSection'
// import images
import split from '../../Images/facilities/Store_in_faci/Split.jpg'
import Farms from '../../Images/facilities/Store_in_faci/Farms.jpg'
import Cow from '../../Images/facilities/Store_in_faci/Cow.jpg'

function page() {
  return (
    <Div>

      <Heading Content={'	Guar Protein Extract (Guar Meal)'} />

      <Paragraph text = {"Guar is a valuable source of protein. Thus Guar Protein Extract is widely used in the production of cattle and poultry feed throughout the world."} /> 

      <ProcessSection 
        processImage={split.src}
      />

      <div className='farms-container'>
          <Card
            key={3}
            imageSrc={Farms.src}
            altText="Poultry Farms"
            title="Poultry Farms"
          />
          <Card
            key={4}
            imageSrc={Cow.src}
            altText="Cattle Farms"
            title="Cattle Farms"
          />
      </div>
      
    </Div>
  )
}

export default page
