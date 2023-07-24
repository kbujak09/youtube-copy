import { useState } from 'react';

const Description = ({views, date, text}) => {

  const [expanded, setExpanded] = useState(false);

  return (
      !expanded ?  <div class='videoDescription'>
                      <div className="videoDescriptionData">
                        <div className='videoDescriptionViews'>{views}</div>
                        <div className='videoDescriptionDate'>{date}</div>
                      </div>
                      <div className="videoDescriptionTextDiv"><pre className="videoDescriptionText">{text}</pre></div>
                      <div className="videoDescriptionShowMore" onClick={() => setExpanded(true)}>Show More</div>
                    </div> : 
                    <div class='videoDescriptionExpanded'>
                      <div className="videoDescriptionData">
                        <div lassName='videoDescriptionViewsExpanded'>{views}</div>
                        <div className='videoDescriptionDateExpanded'>{date}</div>
                      </div>
                      <div className="videoDescriptionTextDivExpanded"><pre className="videoDescriptionText">{text}</pre></div>
                      <div className="videoDescriptionShowLess" onClick={() => setExpanded(false)}>Show Less</div>
                    </div>
  )
}

export default Description