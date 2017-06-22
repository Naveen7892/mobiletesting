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
        }
    }
})();