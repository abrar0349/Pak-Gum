import Heading from '../../facilities/Component/Heading'
import Paragraph from '../component/paragraph'
import Div from '../component/Div'

import ProcessSection from '../component/ProcessSection'
// images importing 
import split from '../../Images/facilities/Store_in_faci/Split.jpg'


function page() {
  return (
    <Div>

      <Heading Content={'Splits (double and triple dehusking)'} />

      <Paragraph text = {'Guar Splits, the intermediary product can be further processed or used directly in a variety of applications.'} /> 

      <ProcessSection 
        processImage={split.src}
      />
      
    </Div>
  )
}

export default page
