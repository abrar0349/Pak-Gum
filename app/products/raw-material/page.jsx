import Heading from '../../facilities/Component/Heading'
import Paragraph from '../component/paragraph'
import Div from '../component/Div'
import MapSection from './mapSection'
import map from '../../Images/facilities/Store_in_faci/guar_areas.jpg'


function page() {
  return (
    <Div>

      <Heading Content={'Guar Seed - Raw Material'} />

      <Paragraph text = {'Guar (Cyamopsis tetragonolobus), which belongs to the leguminosae family, is an annual plant, withlarge leaves and clusters of bean like pods, each containing from six to nine pea-shaped seeds. The plant grows in India and Pakistan, is drought resistant and grows well in those semi-arid areas where less hardy crops perish. The Guar crop is sowed after the monsoons, and harvested in early winter. The pods (from 5 to 8 cm) are then opened mechanically to collect the seeds. The guar seed is dicotyledonous, with a diameter of approximately 2.5mm. It contains a large fibrous material composed of thin layers of cellusic material.'} /> 

      <MapSection 
        title={'Guar Growing Areas of Pakistan'}
        altText={'map image'}
        imageSrc={map.src}
      />
      
    </Div>
  )
}

export default page
