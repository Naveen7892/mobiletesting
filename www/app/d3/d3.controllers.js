//  controllers
(function() {
'use strict';

    angular
        .module('testing.d3')
        .controller('D3Controller', D3Controller);

    D3Controller.inject = [];
    function D3Controller() {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { 
            d3.selectAll("p").style("color", "blue");
            
            d3.select("p").style("color", "green");
            d3.select("#p2").style("color", "red");

            d3.select(".myclass").style("color", "darkgray");

            d3.select('tr').selectAll('td').style("color", "darkgreen");


            // Text
            d3.select('#text1').selectAll('p').text("Paragraph text");

            // Append (add at last)
            d3.select("#append1").append('p').text("Appended text");

            // Insert (insert before end tag)
            d3.select("#insert1").insert("p").text("Inserted text");

            // Remove
            d3.select("#remove1").select("p").remove();

            // Html
            d3.select("#html1").select("p").html("<b>Bolded</b> text");

            // Attr (can use classes like attr("class", "error"), where .error { color: red } is defined)
            d3.select("#attr1").select("p").attr("style", "color: red;");

            // Property (to set property which can't be done by attr() )
            d3.select("#prop1").select("input").property("checked", "true");

            // Style
            d3.select("#style1").select("p").style("color", "green");

            // Classed (if true, adds class. if false, removes class)
            d3.select("#classed1").select("p").classed("row", true);

            // FUNCTION OF DATA
            // data = [1, 2, 3];
            // .data(data).(.....) can be used to pass JS data to method chaining
            d3.select("#function1").selectAll("p").style("color", function(d, i) {
                // d - data
                // i - index
                var text = this.innerText;
                if(text.indexOf("error") >= 0) {
                    return "red";
                } else if(text.indexOf("warning") >= 0) {
                    return "orange";
                } else {
                    return "green";
                }
            });

            // Event handling
            d3.select("#event1").selectAll("p")
                .on("mouseover", function() {
                    d3.select(this).style("background-color", "orange");
                    // current event info
                    console.log(d3.event);
                    // x & y coordinates
                    console.log(d3.mouse(this));
                })
                .on("mouseout", function() {
                    d3.select(this).style("background-color", "gray");
                });

            // Animations
            d3.select("#animation1").transition().duration(10000).style("background-color", "green");

            var t = d3.transition().duration(5000);
            d3.select("#animation2").transition(t).style("background-color", "red");


            // SVG (transition, ease, delay, duration)
            var svg = d3.select("#animation3")
                        .append("svg")
                        .attr("width", 500)
                        .attr("height", 500);


            var bar1 = svg.append("rect")
                        .attr("fill", "blue")
                        .attr("x", 100)
                        .attr("y", 20)
                        .attr("height", 20)
                        .attr("width", 10)

            var bar2 = svg.append("rect")
                        .attr("fill", "blue")
                        .attr("x", 120)
                        .attr("y", 20)
                        .attr("height", 20)
                        .attr("width", 10)

            update();

            function update() {
                bar1.transition()
                    .ease(d3.easeLinear)
                    .duration(2000)
                    .attr("height",100)

                bar2.transition()
                    .ease(d3.easeLinear)
                    .duration(2000)
                    .delay(2000)
                    .attr("height",100)
            }

            // Data Binding 
            // .data() - Joins data to the selected elements
            var myData = ["Hello World!", "Super world!"];
     
            var p = d3.select("#animation4")
                    .selectAll("p")
                    .data(myData)
                    .text(function (d) {
                        return d;
                    });


            // .enter() - Creates a selection with placeholder references for missing elements
            var data = [4, 1, 6, 2, 8, 9];
            var body = d3.select("#animation5")
                        .selectAll("span")
                        .data(data)
                        .enter()
                        .append("span")
                        .style("color", function(d) { 
                            if (d % 2 === 0) {
                                return "green";
                            } else {
                                return "red";
                            }
                            // return d + " "; 
                        })
                        .text(function(d) {
                            return d + " ";
                        });

            // Example 2 with matrix
            var matrix = [
                            [1, 2, 3, 4],
                            [5, 6, 7, 8],
                            [9, 10, 11, 12],
                            [13, 14, 15, 16]
                        ];

            var tr = d3.select("#animation6")
                .append("table")  // adds <table>
                .selectAll("tr")  // selects all <tr>
                .data(matrix)      // joins matrix array 
                .enter()           // create placeholders for each row in the array
                .append("tr");// create <tr> in each placeholder

            var td = tr.selectAll("td")
                .data(function (d) {    // joins inner array of each row
                    console.log(d);
                    return d;
                })
                .enter()    // create placeholders for each element in an inner array
                .append("td") // creates <td> in each placeholder
                .text(function (d) {
                    console.log(d);
                    return d; // add value of each inner array as a text in <td>
                });

            // .exit() - Removes nodes and adds them to the exit selection which can be later removed from the DOM using .remove()
            var myData = ["Hello World!"];

            var p = d3.select("#animation7")
                        .selectAll("p")
                        .data(myData)
                        .text(function (d, i) {
                            return d;
                        })
                        .exit()
                        .remove();


            // .datum() - Inject data to the selected element without computing a join.
            d3.select("#animation8")
                .selectAll("p")
                .datum(100)
                .text(function (d, i) {
                    return d;
                });

            d3.select("#animation8").select("p").datum(200).text(function(d, i) {
                return d;
            });

            // Data Loading
            // .csv
            d3.csv("/app/d3/data/employees.csv", function(data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].Name);
                    console.log(data[i].Age);
                }
            });

            // .csv (other ways)
            d3.csv("/app/d3/data/employees.csv")
            .get(function(data) {
                    console.log(data);
            });

            d3.request("/app/d3/data/employees.csv")
            .mimeType("text/csv")
            .response(function (xhr) { 
                return d3.csvParse(xhr.responseText); 
            })
            .get(function(data) {
                console.log(data);
            });
            
            // Use row parameter to convert representation of the data. For example, the following changes names to upper case
            d3.csv("/app/d3/data/employees.csv")
            .row(function(d) {
                    return {
                        age: d.Age,
                        name: d.Name.toUpperCase() // converting name to upper case 
                    }; 
            })
            .get(function(data) {
                console.log(data);
            });

            // .json()
            var testJSON = [{
                "name": "John",
                "age": 30,
                "city": "New York"
            },
            {
                "name": "Jane",
                "age": 20,
                "city": "San Francisco"
            }];

            // d3.json("/app/d3/data/users.json", function(data1) {
            //     console.log(data1);
            // });
            // d3.json("/app/d3/data/users.json", function(data1) {
            //     console.log(data1);
            // });
            // d3.request("/app/d3/data/users.json")
            //     .mimeType("application/json")
            //     .response(function(xhr) {
            //         var res = JSON.parse(xhr.responseText);
            //         console.log(res);
            //         return res;
            //     })
            //     .get(function(data) {
            //         console.log(data);
            //     });

            
            // SVG bar chart with D3
            var dataSVG = [5, 10, 12];

            var width = 200,
                scaleFactor = 10,
                barHeight = 20;

            var graphSVG = d3.select("#svgDemo2")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", barHeight * data.length)
                        // .attr("id", "svgDemo2ID");
                    
            // console.log(graphSVG);
            // console.log(graphSVG.select("#svgDemo2ID"));
            // console.log(document.getElementById("svgDemo2ID"));
            // document.getElementById("svgDemo2ID").append("HTMl");

            var barSVG = graphSVG
                        // .select("#svgDemoID")
                        .selectAll("g")
                        .data(dataSVG)
                        .enter()
                        .append("g")
                        .attr("transform", function(d, i) {
                            return "translate(0," + i * barHeight + ")";
                        });

            console.log(barSVG);

            barSVG.append("rect")
            .attr("width", function(d) {
                return d * scaleFactor;
            })
            .attr("height", barHeight - 1)
            .style("fill", "orange");

            barSVG.append("text")
            .attr("x", function(d) { return (d*scaleFactor); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d; })
            .style("fill", "white")
            .style("font", "10px sans-serif")
            .style("text-anchor", "end");



            // SVG Circle with text using D3
            var widthCircle = 500;
            var heightCircle = 500;

            var dataCircle = [10, 15, 20, 25, 30];
            var colorsCircle = ['#ffffcc','#c2e699','#78c679','#31a354','#006837'];

            var svgCircle = d3.select("#svgDemoCircle")
                        .append("svg")
                        .attr("width", widthCircle)
                        .attr("height", heightCircle);

            var gCircle = svgCircle.selectAll("g")
                        .data(dataCircle)
                        .enter()
                        .append("g")
                        .attr("transform", function(d, i) {
                            return "translate(0,0)";
                        })

            gCircle.append("circle")
            .attr("cx", function(d, i) {
                return i*100 + 50;
            })
            .attr("cy", function(d, i) {
                return 100;
            })
            .attr("r", function(d) {
                return d*1.5;
            })
            .attr("fill", function(d, i){
                return colorsCircle[i];
            });

            gCircle.append("text")
            .attr("x", function(d, i) {
                return i * 100 + 40;
            })
            .attr("y", 105)
            .attr("stroke", "teal")
            .attr("font-size", "12px")
            .attr("font-family", "sans-serif")
            .text(function(d) {
                return d;
            });

            // Bar chart with Scale
            var dataScale = [100, 400, 300, 900, 850, 1000, 0]

            var widthScale = 500,
                barHeightScale = 20,
                marginScale = 1;

            var scaleScale = d3.scaleLinear()
                        .domain([d3.min(dataScale), d3.max(dataScale)])
                        .range([50, 500]);

            var svgScale = d3.select("#svgDemoScale")
                        .append("svg")
                        .attr("width", widthScale)
                        .attr("height", barHeightScale * dataScale.length);

            var gScale = svgScale.selectAll("g")
                        .data(dataScale)
                        .enter()
                        .append("g")
                        .attr("transform", function (d, i) {
                            return "translate(0," + i * barHeightScale + ")";
                        });

            gScale.append("rect")
            .attr("width", function (d) {
                return scaleScale(d);
            })
            .attr("height", barHeightScale - marginScale)
            .style("fill", "orange");

            gScale.append("text")
            .attr("x", function (d) { return (scaleScale(d)); })
            .attr("y", barHeightScale / 2)
            .attr("dy", ".35em")
            .text(function (d) { return d; })
            .style("fill", "white")
            .style("font", "10px sans-serif")
            .style("text-anchor", "end");


            // Axis with D3
            var widthAxis = 400,
                heightAxis = 100;

            var dataAxis = [10, 15, 20, 25, 30];
            
            // Append SVG 
            var svgAxis = d3.select("#svgDemoAxis")
                        .append("svg")
                        .attr("width", widthAxis)
                        .attr("height", heightAxis);

            // Create scale
            var scaleAxis = d3.scaleLinear()
                        .domain([d3.min(dataAxis), d3.max(dataAxis)])
                        .range([0, widthAxis - 100]);

            // Add scales to axis
            var x_axisAxis = d3.axisBottom()
                        .scale(scaleAxis);

            //Append group and insert axis
            svgAxis.append("g")
            .call(x_axisAxis);

            // PIE CHART WITH D3

            // partstodo, being nested, being processed, done, in production, trouble, cam trouble(2)
            // "#partsinnest": 15,
            // "#partsinprocess": 31,
            // "#qtydone": 4,
            // "#partstodo": 10,
            // "#partsinproduction": 12,
            // "#partsintrouble2": 14,
            // "#partsintrouble": 1,
            // "#qtyordered": 86

            // var dataPie = [4, 12, 31, 0, 1, 14, 10];
            // var colorPie = d3.scaleOrdinal(['seagreen', 'lightgreen', 'thistle', 'steelblue', 'red', 'darkorange', 'yellow']);
            var dataPie = [10, 15, 31, 4, 12, 1, 14];
            var colorPie = d3.scaleOrdinal(['yellow', 'steelblue', 'thistle', 'seagreen', 'lightgreen', 'red', 'darkorange']);

            // var dataPie = [2, 4, 8, 10];
            // var colorPie = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);


            var elem = d3.select("#svgDemoPie");
            var svgPie = elem.select("svg"),
                widthPie = svgPie.attr("width"),
                heightPie = svgPie.attr("height"),
                radiusPie = Math.min(widthPie, heightPie) / 2,
                gPie = svgPie.append("g").attr("transform", "translate(" + widthPie / 2 + "," + heightPie / 2 + ")");

            // Generate the pie
            var piePie = d3.pie().sort(null);

            // Generate the arcs
            var arcPie = d3.arc()
                        .innerRadius(0)
                        .outerRadius(radiusPie)
                        
                        .startAngle(function(d) { return d.startAngle + Math.PI/2; })
                        .endAngle(function(d) { return d.endAngle + Math.PI/2; });

            //Generate groups
            var arcsPie = gPie.selectAll("arc")
                        .data(piePie(dataPie))
                        .enter()
                        .append("g")
                        .attr("class", "arc")

            //Draw arc paths
            arcsPie.append("path")
                .attr("fill", function(d, i) {
                    return colorPie(i);
                })
                .attr("d", arcPie);


            // STACKED BAR CHART

            var datavars = [224, 84, 29, 3];
            var colors = ['green','blue','darkgray','#606060'];
            
            var svg = d3.select('#stackedBarChart')
            .append('svg')
            .attr('width', 500)
            .attr('height', 100);
            
            svg.selectAll('rect')
            .data(datavars)
            .enter()
            .append('rect')
            .attr('width', function(d){
                return d;})
                           .attr('x',function(d, i){
                           return sum(datavars, 0, i); })
            .attr('fill', function(d, i){ return colors[i]; })
            .attr('y',0)
            .attr('height', 30);
            
            function sum(array, start, end) {
                var total = 0;
                for(var i=start; i<end; i++) total += array[i];
              return total;
            }

        } // End of activate
    }
})();