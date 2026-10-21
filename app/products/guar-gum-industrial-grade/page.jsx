import Heading from '../../facilities/Component/Heading'
import Paragraph from '../component/paragraph'
import Div from '../component/Div'
import BulletList from '../../facilities/Component/BulletList'
import Card from '../component/Card'

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
                img = {"http://www.pakgum.com/IMG/pumpjack-oil-well.jpg"}
              />

            <div>
                <Heading Content={'Paper Industry'} />

                <Paragraph text = {"	Galactomannans replace or supplement the natural hemicelluloses in paper bonding."} />  

            </div>

              <Card 
                img = {"http://www.pakgum.com/IMG/UPM-Mill_2.jpg"}
              />
            <div>
                <Heading Content={'http://www.pakgum.com/IMG/UPM-Mill_2.jpg'} />

                <Paragraph text = {"	Guar gum is used in froth flotation of postash as an auxiliary reagent, depressing gangue minerals, which might be clay, talc, or shale. Guar gum is also used as a flocculants (settling agent) to concentrate ores or tailings in the mining industry. In practice, slimes and tailings from ore beneficiation processes are concentrated so that the water can be reused and the solids easily processed."} /> 

            </div>
              <Card 
                img = {"http://www.pakgum.com/IMG/Mining_report_bg.jpg"}
              />
        </div>
      
    </Div>
  )
}

export default page
