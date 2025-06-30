import PropTypes from "prop-types";
import "./ProfileGrid.css";
import ErrorBoundary from "../ErrorBoundary";
import ProfileCard from "./ProfileCard";
import layoutConfig from "./configCss";

ProfileGrid.propTypes = {
  type: PropTypes?.string?.isRequired,
  source: PropTypes.object.isRequired,
};
function ProfileGrid(props) {
 
  const isValidType = layoutConfig.hasOwnProperty(props.type);
  return (
    <ErrorBoundary>
      {isValidType ? (
        <section className="d-grid m24 b-1-grey p20 br-12">
          {props.source?.data?.length > 0 ? (
            <>
              <header className="text-center">
                <h2>{props.source.title}</h2>
                <p>{props.source.title_description}</p>
              </header>

              <main
                className={`d-grid m24 ${
                  layoutConfig[props?.type]?.gridClasses
                }`}
              >
                {props.source.data.map((memberData, index) => {
                  const showImage = memberData.isImage !== false;
                  if (typeof memberData.render === "function") {
                    return (
                      <div key={index}>{memberData.render(props.type)}</div>
                    );
                  }

                  return (
                    <ProfileCard
                      key={index}
                      layoutClasses={layoutConfig[props.type]?.layoutClasses}
                      imageClasses={layoutConfig[props.type]?.imageClasses}
                      type={props.type}
                      member={memberData}
                      shouldShowMemberInfo={
                        layoutConfig[props.type]?.shouldShowMemberInfo
                      }
                      shouldShowSocial={
                        layoutConfig[props.type]?.shouldShowSocial
                      }
                      showDescription={
                        layoutConfig[props.type]?.showDescription
                      }
                      showImage={showImage}
                      imgCss={layoutConfig[props.type]?.imgCss}
                    />
                  );
                })}
              </main>
            </>
          ) : (
            <div className="place-center">
              <img
                src="nodatafound.png"
                className="nodata-img"
                alt="nodatafound"
              />
            </div>
          )}
        </section>
      ) : (
        <div className="place-center">
          <h2>Type Not Present</h2>
        </div>
      )}
    </ErrorBoundary>
  );
}

export default ProfileGrid;
