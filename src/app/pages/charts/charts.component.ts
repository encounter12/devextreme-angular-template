import { Component, OnInit } from '@angular/core';
import { CitiesPopulation, ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  providers: [ChartsService]
})
export class ChartsComponent implements OnInit {
  citiesPopulations: CitiesPopulation[];

  constructor(chartsService: ChartsService) { 
    this.citiesPopulations = chartsService.getCitiesPopulations();
  }

  customizeTooltip(arg) {
    var data = arg.node.data,
        result = null;

    if (arg.node.isLeaf()) {
        result = "<span class='city'>" + data.name + "</span> (" +
            data.country + ")<br/>Population: " + arg.valueText;
    }

    return {
        text: result
    };
  }

  ngOnInit() {
  }

}
