import PropTypes from "prop-types";
import "./teamLayout.css";
import TeamMember from "./teamMember";
import ErrorBoundary from "../ErrorBoundary";

TeamLayout.propTypes ={
 type: PropTypes.string.isRequired,
 source : PropTypes.object.isRequired,
}
function TeamLayout(props) {

  const layoutConfig = {
    inline:{
      layoutClasses:'d-grid g-template-col2',
      imageClasses:'wh-80 br-10',
      shouldShowMemberInfo:true,
      gridClasses:'g-template-col3 gap-6',
      imgCss:''
    },
    card:{
      layoutClasses:'b-1-grey br-10 p20',
      imageClasses:'wh-80 br-50p',
      shouldShowMemberInfo:props.source?.data?.some((d) => d.isImage),
      shouldShowSocial:true,
      showDescription:true,
      gridClasses:"g-template-card gap-6",
      imgCss:'d-grid g-template-card2 gap-2',
    },
    medium:{
      layoutClasses:'place-center',
      imageClasses: 'wh-240 br-12',
      shouldShowMemberInfo:true,
      gridClasses:"g-template-col3 gap-6",
      imgCss:'text-center'
    },
    circle:{
     layoutClasses:'place-item',
     imageClasses:'wh-80 br-50p',
     shouldShowMemberInfo:true,
     gridClasses:"g-template-col5 gap-2",
     imgCss:'text-center'
    }
  }
  return (
    <ErrorBoundary>
    <section className="d-grid m24 b-1-grey p20 br-12">
      {props.source?.data?.length > 0 ? (
        <>
          <header className="text-center">
            <h2>{props.source.title}</h2>
            <p>{props.source.title_description}</p>
          </header>

          <main
            className={`d-grid m24 ${
              layoutConfig[props?.type].gridClasses}`}
          >
            {props.source.data.map((memberData,index) => {
              const showImage = memberData.isImage !== false;
              if (typeof memberData.render === "function") {
                return <div key={index}>{memberData.render(props.type)}</div>;
              }

              return (
                <TeamMember 
                key={index}
                layoutClasses={layoutConfig[props.type].layoutClasses}
                imageClasses={layoutConfig[props.type].imageClasses}
                type={props.type}
                member={memberData}
                shouldShowMemberInfo={layoutConfig[props.type].shouldShowMemberInfo}
                shouldShowSocial={layoutConfig[props.type].shouldShowSocial}
                showDescription={layoutConfig[props.type].showDescription}
                showImage={showImage}
                imgCss={layoutConfig[props.type].imgCss}
                />
              );
            })}
          </main>
        </>
      ): <div className="place-center"><img src="nodatafound.png" className="nodata-img" alt='nodatafound'/></div>}
    </section>
    </ErrorBoundary>
  );
}

export default TeamLayout;
