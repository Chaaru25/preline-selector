import PropTypes from "prop-types";
import SocialMedia from "./socialMedia";
import "./teamLayout.css";
import TeamMember from "./teamMember";
import ErrorBoundary from "../ErrorBoundary";

TeamLayout.propTypes ={
 type: PropTypes.string.isRequired,
 source : PropTypes.object.isRequired,
}
function TeamLayout(props) {
  const layoutClasses = {
    inline: "d-grid g-template-col2",
    card: "b-1-grey br-10 p20",
    medium: "place-center",
    circle: "place-item",
  };

  const imageClasses = {
    inline: "wh-80 br-10",
    card: "wh-80 br-50p",
    medium: "wh-240 br-12",
    circle: "wh-80 br-50p",
  };

  const shouldShowMemberInfo =
  props.type !== "card" ||
    (props.type === "card" && props.source?.data?.some((d) => d.isImage));
  const shouldShowSocial =
  props.type !== "circle" && props.type !== "medium" && props.type === "card";
  const showDescription = props.type === "card";

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
              props.type === "circle"
                ? "g-template-col5 gap-2"
                : props.type === "card"
                ? "g-template-card gap-6"
                : "g-template-col3 gap-6"
            }`}
          >
            {props.source.data.map((memberData,index) => {
              const showImage = memberData.isImage !== false;
              if (typeof memberData.render === "function") {
                return <div key={index}>{memberData.render(props.type)}</div>;
              }

              return (
                <TeamMember 
                key={index}
                layoutClasses={layoutClasses[props.type]}
                imageClasses={imageClasses[props.type]}
                type={props.type}
                member={memberData}
                shouldShowMemberInfo={shouldShowMemberInfo}
                shouldShowSocial={shouldShowSocial}
                showDescription={showDescription}
                showImage={showImage}
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
