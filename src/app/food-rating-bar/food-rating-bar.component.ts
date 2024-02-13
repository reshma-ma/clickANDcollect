import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food/food.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-food-rating-bar',
  templateUrl: './food-rating-bar.component.html',
  styleUrl: './food-rating-bar.component.css'
})
export class FoodRatingBarComponent implements OnInit{


  food:Food[]=[];


  private svg: any;
  private margin = 50;
  private width = 500 - (this.margin * 2);
  private height = 300 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}



private drawBars(data: Food[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.name))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 5])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.name))
  .attr("y", (d: any) => y(d.stars))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => this.height - y(d.stars))
  .attr("fill", "#d04a35");
}

  constructor(private foodService:FoodService){}

  ngOnInit(): void {
    this.food= this.foodService.getAll();
    this.createSvg();
    this.drawBars(this.food);
  }

}
