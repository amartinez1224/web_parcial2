import React, {useRef,useEffect} from "react";
import * as d3 from "d3";
import {FormattedMessage} from 'react-intl';
 
function Chart(props) {
  const svgRef = useRef(null);
  const width = 450;
  const height = 450;
  const margin = 40;
  const radius = Math.min(width, height) / 2 - margin;

  useEffect(()=>{
    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll("*").remove();

    let svg = svgEl.attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width/2}, ${height/2})`)

    let data = {}
    props.data.map((item,i)=>{
        data[item.name] = item.powerUsage.value;
    })

    const color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    const pie = d3.pie()
    .value(function(d) {return d[1]})
    const data_ready = pie(Object.entries(data))

    let tooltip = d3.select("#textTool")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden");

    svg.selectAll('whatever')
    .data(data_ready)
    .join('path')
    
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){return(color(d.data[1])) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)
    .on("mouseover", (d,i)=>{tooltip.text(i.data[0]+": "+i.data[1]+" KwH");return tooltip.style("visibility", "visible")})
    .on("mouseout", (d,i)=>{return tooltip.style("visibility", "hidden")})

    //svg.selectAll('whatever')
   // .on("mouseover", function(d){return tooltip.style("visibility", "visible").text(d.data);})
    //.on("mouseout", function(d){return tooltip.style("visibility", "hidden");})


  });

  return <div className="row" style={{textAlign:"center" ,display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div>
      <h3><FormattedMessage id="Power Usage"/></h3>
      <p id="textTool"></p>
      </div>
      <svg ref={svgRef} width={width} height={height}/>
      </div>;
}

export default Chart;