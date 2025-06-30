const layoutConfig = {
    inline: {
      layoutClasses: "d-grid g-template-col2",
      imageClasses: "wh-80 br-10",
      shouldShowMemberInfo: true,
      gridClasses: "g-template-col3 gap-6",
      imgCss: "",
    },
    card: {
      layoutClasses: "b-1-grey br-10 p20",
      imageClasses: "wh-80 br-50p",
    //   shouldShowMemberInfo: props.source?.data?.some((d) => d.isImage),./
      shouldShowSocial: true,
      showDescription: true,
      gridClasses: "g-template-card gap-6",
      imgCss: "d-grid g-template-card2 gap-2",
    },
    medium: {
      layoutClasses: "place-center",
      imageClasses: "wh-240 br-12",
      shouldShowMemberInfo: true,
      gridClasses: "g-template-col3 gap-6",
      imgCss: "text-center",
    },
    circle: {
      layoutClasses: "place-item",
      imageClasses: "wh-80 br-50p",
      shouldShowMemberInfo: true,
      gridClasses: "g-template-col5 gap-2",
      imgCss: "text-center",
    },
  };
export default layoutConfig;