import SocialMedia from "./socialMedia";
import "./teamLayout.css";

function TeamLayout({ type, source }) {
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
    type !== "card" ||
    (type === "card" && source?.data?.some((d) => d.isImage));
  const shouldShowSocial =
    type !== "circle" && type !== "medium" && type === "card";
  const showDescription = type === "card";

  return (
    <div className="m24 b-1-grey p20 br-12">
      {source?.data?.length > 0 ? (
        <>
          <div className="text-center">
            <h2>{source.title}</h2>
            <p>{source.title_description}</p>
          </div>

          <div
            className={`d-grid m24 ${
              type === "circle"
                ? "g-template-col5 gap-2"
                : type === "card"
                ? "g-template-card gap-6"
                : "g-template-col3 gap-6"
            }`}
          >
            {source.data.map((d) => {
              const showImage = d.isImage !== false;
              if (typeof d.render === "function") {
                return <div>{d.render(type)}</div>;
              }

              return (
                <div key={d.id} className={layoutClasses[type]}>
                  {showImage && (
                    <div
                      className={
                        type === "card"
                          ? "d-grid g-template-card2 gap-2"
                          : type === "inline"
                          ? ""
                          : "text-center"
                      }
                    >
                      <img
                        src={
                          d.image ||
                          "https://preline.co/assets/img/160x160/img1.jpg"
                        }
                        className={imageClasses[type]}
                      />
                      {shouldShowMemberInfo && type !== "inline" && (
                        <div
                          className={`${
                            type == "medium" || type == "circle"
                              ? "text-center"
                              : "self-center"
                          } mt10`}
                        >
                          <h6>{d.name}</h6>
                          <p className="font12 color-grey">
                            {d.role?.toUpperCase()}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {type === "inline" && (
                    <div className="self-center">
                      <h6>{d.name}</h6>
                        <p className="font12 color-grey">
                          {d.role?.toUpperCase()}
                        </p>
                      <div className="mt-6">
                        <SocialMedia className="wh-14 social-icon" />
                      </div>
                    </div>
                  )}

                  {showDescription && d.description && (
                    <div className="mblock-5">
                      <p className="color-grey">{d.description}</p>
                    </div>
                  )}

                  {shouldShowSocial && (
                    <SocialMedia className="b-1-grey p7 br-5 wh-30 hover" />
                  )}
                </div>
              );
            })}
          </div>
        </>
      ): <div className="d-grid place-center"><img src="nodatafound.png" className="nodata-img"/></div>}
    </div>
  );
}

export default TeamLayout;
