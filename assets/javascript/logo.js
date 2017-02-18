// Animate our logo
import * as d3 from 'd3-selection';
import 'd3-transition';

const stepDuration = 70;

const bounce = (logo) => {
  return logo.transition()
      .duration(stepDuration)
      .attr("transform", "translate(0,-12)")
    .transition()
      .duration(stepDuration)
      .attr("transform", "translate(0,12)")
    .transition()
      .duration(stepDuration)
      .attr("transform", "translate(0,-3)")
    .transition()
      .duration(stepDuration)
      .attr("transform", "translate(0,3)")
    .transition()
      .duration(stepDuration)
    .attr("transform", "translate(0,0)");
}

const addBounceToLogo = () => {
  const logo = d3.select("svg g");

  d3.select("svg").on("click", () => {
    bounce(logo);
  });

  // Zoom and initialize
  bounce(logo);
}

export default addBounceToLogo;
