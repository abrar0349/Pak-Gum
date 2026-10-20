import Heading from '../../facilities/Component/Heading'
import Paragraph from '../component/paragraph'
import Div from '../component/Div'
import { Card } from '../../facilities/Component/Card';

import './guar_product_food.css'

import ProcessSection from '../component/ProcessSection'
// images importing 
import split from '../../Images/facilities/Store_in_faci/Split.jpg'
import bake_food from '../../Images/facilities/Store_in_faci/bake_food.jpg'

function page() {
  return (
    <Div>

      <Heading Content={'Guar Gum Powder (Food Grade)'} />

      <Paragraph text = {"The primary use of Guar gum is as a food additive. Food additives play a vital role in today's bountiful and nutritious food supply. Legally it refers to any substance the intended use which results or may be reasonably be expected to result-directly or indirectly-in its becoming a component or otherwise affecting the characteristics of any food. This definition includes any substance used in the production, processing, treatment, packaging, transportation or storage of food. Additives have been used for many years to preserve, flavour, blend, and thicken foods, and have played an important role in reducing serious nutritional deficiencies among people."} /> 

      <ProcessSection 
        processImage={split.src}
      />
      
      <div className='food_card_container'>
          <Card
            key={1}
            imageSrc={bake_food.src}
            altText="Baked Food"
            title="Baked Food"
        />
        <Card
            key={1}
            imageSrc={bake_food.src}
            altText="Baked Food"
            title="Baked Food"
        />
        <Card
            key={1}
            imageSrc={bake_food.src}
            altText="Baked Food"
            title="Baked Food"
        />
        <Card
            key={1}
            imageSrc={bake_food.src}
            altText="Baked Food"
            title="Baked Food"
        />
      </div>
    </Div>
  )
}

export default page
