import Heading from '../../facilities/Component/Heading'
import Paragraph from '../component/paragraph'
import Div from '../component/Div'
import BulletList from '../../facilities/Component/BulletList'
import { Card } from '../../facilities/Component/Card';

import './industrial.css'


function page() {
  return (
    <Div>

        <div className='industrial-container'>
            <div>
                <Heading Content={'Oil Well Drilling'} />

                <Paragraph text = {"Guar gum as a water-soluble polymer has found a broad range of applications in the production of petroleum. It serves one or more functions, such as."} /> 


              <BulletList items={[
                "Water-loss control",
                "Viscosity control",
                "Flocculation",
                "Suspension",
                "Turbulent friction reduction or mobility control",
              ]} /> 

              <Paragraph text = {"The use of guar gum as a suspending agent for sand in drilling mud and in fracturing fluids led to the discovery that guar solutions have lower friction than water. Guar has become a widely used material for both industrial and experimental friction reduction because of the robust characteristics of its molecule, which tend to prevent degradation due to high shear forces. When using the optimum concentration, the horsepower required for the fracturing operation is reduced by a factor of over five."} /> 

            </div>

            <Card
              key={3}
              imageSrc={"frame"}
              altText="Poultry Farms"
              title="Poultry Farms"
            />
        </div>
      
    </Div>
  )
}

export default page
