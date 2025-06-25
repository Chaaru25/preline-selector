import PropTypes from "prop-types";

CustomRendering.propTypes = {
  type: PropTypes.string.isRequired
}

function CustomRendering(props) {
    if (props.type == "inline") {
        return (
          <section className="d-grid g-template-col2 align-center">
            <div>
              <img
                src="https://preline.co/assets/img/160x160/img1.jpg"
                className="wh-80 br-10"
                alt='inline-image'
              />
            </div>
            <div>
              <h6 className="font-16">We are hiring!</h6>
              <a href="/careers" className="font16 text-decoration-none">
                Checkouts/ Careers
              </a>
            </div>
          </section>
        );
      } else if (props.type == "card") {
        return (
          <section className="dashed-b-1-grey br-10 p20 h100 d-flex justify-center align-center f-d-col">
            <p className="font20">We are hiring!</p>
            <a href="/careers" className="font16 text-decoration-none">
              See all opening positions &gt;
            </a>
          </section>
        );
      }
      else{
        return null;
      }
}
export default CustomRendering;