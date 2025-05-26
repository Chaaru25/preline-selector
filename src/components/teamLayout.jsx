

function TeamLayout(props) {
const {type, source} = props;

const renderLayout = (d) =>{
  const SocialMedia = ({className}) =>(
    <div className="d-flex">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 28 22.934" viewBox="0 0 28 22.934" id="twitter-logo" className={` ml5 ${className}`}>
        <path d="M1.85,1.131c0,0,4.175,5.608,11.859,6.003c0,0-1.046-4.086,2.807-6.343s7.06,1.027,7.06,1.027s1.977-0.33,3.676-1.344c0,0-0.57,2.053-2.472,3.169c0,0,2.053-0.292,3.22-0.862c0,0-1.166,1.876-2.801,2.928c0,0,0.71,11.826-10.597,16.187C6.761,24.92,0,20.375,0,20.375s3.904,0.811,8.366-2.383c0,0-3.574,0.177-5.349-4.081c0,0,1.217,0.33,2.586-0.076c0,0-4.31-0.608-4.563-5.704c0,0,1.546,0.71,2.51,0.684C3.549,8.815-0.533,5.894,1.85,1.131z" fill='#6a7282'></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 28 27.311" viewBox="0 0 28 27.311" id="github-logo" className={`ml5 ${className}`}>
        <path d="M28,14c0-7.732-6.268-14-14-14S0,6.268,0,14c0,6.221,4.061,11.488,9.674,13.311c0.767-0.235,0.803-0.702,0.803-0.702s0-1.383,0-2.661c-0.843,0.155-1.89,0.157-2.271,0.157c-0.464,0-2.009-0.386-2.689-2.132c-0.68-1.746-1.947-1.916-1.947-2.225s0.278-0.371,0.278-0.371s0.17,0,0.927,0c0.757,0,1.514,1.267,2.04,2.04s1.792,0.927,2.411,0.927c0.347,0,0.885-0.175,1.294-0.329c0.167-1.082,0.792-1.896,0.792-1.896c-6.243-0.556-6.397-5.223-6.397-7.046c0-1.823,1.484-3.616,1.484-3.616s-0.719-2.04,0.185-3.709c1.947,0.015,3.894,1.483,3.894,1.483S12.238,6.676,14,6.676s3.523,0.556,3.523,0.556s1.947-1.468,3.894-1.483c0.904,1.669,0.185,3.709,0.185,3.709s1.484,1.792,1.484,3.616c0,1.823-0.155,6.49-6.397,7.046c0,0,0.834,1.082,0.834,2.411s0,4.08,0,4.08s0.035,0.466,0.803,0.702C23.939,25.488,28,20.221,28,14z" fill='#6a7282'></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.26 44.26" id="slack" className={`ml5 ${className}`}>
      <g>
        <path d="M32.62 10.38v5.86A4.53 4.53 0 0 1 30 20.48a4.64 4.64 0 0 1-6.57-3.27 5.09 5.09 0 0 1-.09-.95V4.69a4.65 4.65 0 0 1 9.23-.86 5.62 5.62 0 0 1 .07.92zM10.48 20.94H4.69a4.65 4.65 0 0 1-.86-9.23 5.82 5.82 0 0 1 .93-.07h11.47a4.48 4.48 0 0 1 3.21 1.24 4.43 4.43 0 0 1 1.31 4.69 4.46 4.46 0 0 1-3.56 3.28 3.87 3.87 0 0 1-.9.09zm1.16 12.85V28a4.65 4.65 0 0 1 9.25-.78 5.09 5.09 0 0 1 .05.69v11.7a4.65 4.65 0 0 1-9.24.7 4.42 4.42 0 0 1-.06-.81zm22.14-1.17h-5.76a4.55 4.55 0 0 1-3.83-1.95 4.65 4.65 0 0 1 2.88-7.27 4.6 4.6 0 0 1 .91-.08h11.59A4.63 4.63 0 0 1 44.16 27a4.66 4.66 0 0 1-4.62 5.59c-1.92.04-3.84.03-5.76.03zM20.94 6.76v2.4c0 .13 0 .15-.16.15h-4.51a4.62 4.62 0 0 1-4.37-3.16A4.48 4.48 0 0 1 13 1.38a4.65 4.65 0 0 1 7.35 1 4.54 4.54 0 0 1 .59 2.31zM37.5 20.94h-2.4c-.11 0-.15 0-.15-.14v-4.64a4.65 4.65 0 1 1 5.37 4.73 6.3 6.3 0 0 1-.75.05zM6.76 23.32h2.41c.11 0 .14 0 .14.14v4.64a4.66 4.66 0 1 1-5.37-4.72 4.36 4.36 0 0 1 .72-.05zM23.32 37.5v-2.38c0-.15.05-.17.18-.17H28a4.64 4.64 0 0 1 4.37 3.15 4.52 4.52 0 0 1-1.11 4.78 4.64 4.64 0 0 1-7.34-1 4.58 4.58 0 0 1-.6-2.31z" fill='#6a7282'></path>
      </g>
      </svg>


      {/* <img src="/twitter-logo.svg" alt='twitter' /> */}
      {/* <img src="/github-logo.svg" alt='github' className={`ml5 ${className}`}/>
      <img src="/slack.svg" alt="slack" className={`ml5 ${className}`}/> */}
  </div>
  )
  const Memberinfo =({className}) =>(
    <div className={`${className}`}> 
    <h6>{d.name}</h6>
    <p className="font-12 color-grey">{(d.role).toUpperCase()}</p></div>
  
  )
  switch(type){

    case 'inline':
      return(
      <div key={d.id} className="d-grid  g-template-col2 gap-4">
        <div >
          <img src={d.image || "https://preline.co/assets/img/160x160/img1.jpg"} className="wh-80 br-10"/>
        </div>
         <div className="self-center"><h6>{d.name}</h6>
           {d.isImage ? <p className="font-12 color-grey">{(d.role).toUpperCase()}</p> : <a className="font-12 text-decoration-none">{(d.role).toUpperCase()}</a>}
          {d.isSocialMedia && <SocialMedia className={' wh-15 social-icon'}/>}
         </div>
       </div>);

    case 'card':
      return(
        <div key={d.id} className="b-1-grey br-10 p20">
          {d.isImage ? (<div className="d-grid g-template-card2 gap-2">
            <img src={d.image} className="wh-80 br-50p"/>
              <Memberinfo className='self-center'/>
          </div>):  
            (<div className="d-flex justify-center f-d-col place-center text-center h100">
            <p className="font-18">{d.name}</p>
          <a className="text-decoration-none ">{'See all opening positions'}</a>
          </div>)}
          <div className="mblock-5">
            <p className="color-grey">{d.description}</p>
          </div>
          {d.isSocialMedia && <SocialMedia className="b-1-grey p6 br-5 wh-30 hover"/>}
        </div>)

    case 'medium':
      return( 
        <div key={d.id} className="place-center">
       {d.isImage && <img src={d.image} className="wh-250 br-10"/>}
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
        <div className="m24 b-1-grey p20 br-10">
            {/* Title */}
            <div className="text-center">
               <h2 className="">{source?.title}</h2>
               <p>{source?.title_description}</p>
            </div>
            {/* Grid */}
            <div className={`d-grid m24 ${type == 'circle' ?   "g-template-col5 gap-2" : type == 'card' ? "g-template-card gap-6" :"g-template-col3 gap-6"  }`}>
                
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

