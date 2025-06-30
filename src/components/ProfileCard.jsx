import PropTypes from "prop-types";
import SocialMedia from "./socialMedia";

let ProfileCard = (props) => {
  return (
    <section key={props.member.id} className={`${props.layoutClasses}`}>
      {props.showImage && (
        <article
          className={`${props?.imgCss}`}
        >
          <img
            src={props.member.image}
            alt={`${props.member.image}'s image`}
            className={`${props.imageClasses}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.alt = "No Data Found !!!!"; // path to default image
            }}
          />
          {props.shouldShowMemberInfo && props.type !== "inline" && (
            <div
              className={`${
                props.type == "medium" || props.type == "circle"
                  ? "text-center"
                  : "self-center"
              } mt10`}
            >
              <h6>{props.member.name}</h6>
              <p className="font12 color-grey">
                {props.member.role?.toUpperCase()}
              </p>
            </div>
          )}
        </article>
      )}

      {props.type === "inline" && (
        <article className="self-center">
          <h6>{props.member.name}</h6>
          <p className="font12 color-grey">
            {props.member.role?.toUpperCase()}
          </p>
          <div className="mt-6">
            <SocialMedia className="wh-14 social-icon" />
          </div>
        </article>
      )}

      {props.showDescription && props.member.description && (
        <div className="mblock-5">
          <p className="color-grey">{props.member.description}</p>
        </div>
      )}

      {props.shouldShowSocial && (
        <SocialMedia className="b-1-grey p7 br-5 wh-30 hover" />
      )}
    </section>
  );
};
ProfileCard.propTypes = {
  layoutClasses: PropTypes.string.isRequired,
  imageClasses: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  member: PropTypes.string.isRequired,
  shouldShowMemberInfo: PropTypes.bool,
  shouldShowSocial: PropTypes.bool,
  showDescription: PropTypes.bool,
  showImage: PropTypes.bool,
  imgCss:PropTypes.string.isRequired
};
export default ProfileCard;