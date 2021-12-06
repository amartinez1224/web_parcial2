import React, {useRef,useEffect} from "react";
import * as d3 from "d3";
 
function Chart(props) {
  const svgRef = useRef(null);
  const width = 450;
  const height = 450;
  const margin = 40;
  const radius = Math.min(width, height) / 2 - margin;

  useEffect(()=>{
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();

    svgEl.attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width/2}, ${height/2})`)

    const pie = d3.pie()
    .value(function(d) {return d[1]})
    //const data_ready = pie(Object.entries(data))
  });

  return <svg ref={svgRef}/>;
}

export default Chart;