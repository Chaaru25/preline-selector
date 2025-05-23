

function TeamLayout(props) {
const {type, source} = props;

const renderLayout = (d) =>{
  const SocialMedia = ({className}) =>(
    <div className="d-flex">
      <img src="/twitter-logo.svg" alt='twitter' className={` ml5 ${className}`}/>
      <img src="/github-logo.svg" alt='github' className={`ml5 ${className}`}/>
      <img src="/slack.svg" alt="slack" className={`ml5 ${className}`}/>
  </div>
  )
  const Memberinfo =({className}) =>(
    <div className={`${className}`}> 
    <h6>{d.name}</h6>
    <p className="font-12 color-grey">{d.role}</p></div>
  
  )
  switch(type){

    case 'inline':
      return(
      <div key={d.id} className="d-grid  g-template-col2 gap-4">
        <div >
          <img src={d.image} className="wh-80 br-10"/>
        </div>
         <div><h5>{d.name}</h5>
           <p className="font-12 color-grey">{d.role}</p>
          <SocialMedia className={' wh-15'}/>
         </div>
       </div>);

    case 'card':
      return(
        <div key={d.id} className="b-1-grey br-10 p20">
          <div className="d-grid g-template-col2 gap-2">
            <img src={d.image} className="wh-80 br-50p"/>
              <Memberinfo className='self-center'/>
          </div>
          <div className="mblock-5">
            <p className="color-grey">{d.description}</p>
          </div>
          <SocialMedia className="b-1-grey p6 br-5 wh-30"/>
        </div>)

    case 'medium':
      return( 
        <div key={d.id} className="place-center">
        <img src={d.image} className="wh-250 br-10"/>
        <Memberinfo className='justify-self mt10'/>
        </div> )

    case 'circle':
    default:
      return(
        <div className="place-center">
          <img src={d.image} className="wh-80 br-50p"/>
          <Memberinfo className='justify-self mt10'/>
         </div>
      )
  }}

    return (
        <div className="m-4 b-1-grey p20 br-10">
            {/* Title */}
            <div className="text-center">
               <h2 className="">{source?.title}</h2>
               <p>{source?.title_description}</p>
            </div>
            {/* Grid */}
            <div className={`d-grid m-4 ${type == 'circle' ?   "g-template-col5 gap-2" : "g-template-col3 gap-6"}`}>
                
            {source?.data?.map((d)=>(        
                 renderLayout(d)
                ))}   
            </div>   
        </div>
    )
}

export default TeamLayout;
//  this is for inline layout design

{/* <div key={d.id} className="d-grid  g-template-col2 gap-4">
                       <div ><img src={d.image} className="wh-10 br-10"/>
                       </div>
                        <div><h5>{d.name}</h5>
                          <p className="font-12">{d.role}</p>
                          <div className="d-flex">
                            <i className="fa fa-twitter ml-3"></i>
                            <i className="fa fa-github ml-3"></i>
                            <i className="fa fa-github ml-3"></i>
                          </div>
                        </div>
                      </div> */}



// card styled data
{/* <div className="b-1-grey br-10 p20">
<div className="d-grid g-template-col2 gap-4">
  <img src={d.image} className="wh-80 br-50p"/>
  <div className="self-center">
    <h6>{d.name}</h6>
    <p className="font-12">{d.role}</p>
  </div>
</div>
<div>
<p>I am an ambitious workaholic, but apart from that, pretty simple person</p>
</div>
<div className="d-flex">
      <i className="fa fa-twitter ml-3 b-1-grey p6 br-5 wh-30"></i>
      <i className="fa fa-github ml-3 b-1-grey p6 br-5 wh-30"></i>
      <i className="fa fa-github ml-3 b-1-grey p6 br-5 wh-30"></i>
    </div>
</div>  */}

// medium sized image
{/* <div className="place-center">
<img src={d.image} className="wh-250 br-10"/>
<div className="justify-self mt10"> 
<h5>{d.name}</h5>
<p className="font-12">{d.role}</p></div>
</div> */}

