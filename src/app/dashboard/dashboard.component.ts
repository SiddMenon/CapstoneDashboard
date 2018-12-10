import 'rxjs/add/operator/map'
import {Component, OnInit} from '@angular/core';
import {StatsCard} from "../components/statsCard/statsCard";
import {PieChart} from "../components/pieChart/pieChart";
import "../../assets/js/fetch";
import { Http } from '@angular/http';
import {Output} from './output';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './dashboard.component.html',
  selector:'dashboard',
  styleUrls:['./dashboard.scss']
})

export class DashboardComponent implements OnInit{
	title = '?';
    data = [];
    showData = false;
	showPopup = (function (item) {
		alert(item.authors);
	});

  constructor(private http: Http) { }

  ngOnInit(): void {
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
    this.http.get('../assets/js/output.json').map(res => res.json()).subscribe(data => {
    this.data = data;
	console.log(data);
	for(var i = 0; i < data.data.length; i++) {
		if(data.data[i].authors.length >= 25) {
			var tempAuthors = data.data[i].authors.substring(0, 500) + "...";
			data.data[i].tempAuthors = tempAuthors;
			var resources = data.data[i].resources;
			data.data[i].tempResources = "";
			for(var j = 0; j < resources.length; j++) {
				var tempResources = "Title: " + resources[j].title + "\nUrl: " + resources[j].url + "\n";
				data.data[i].tempResources += tempResources
			}
		}
	}
})

  }
}

export function showPopup(item) {
	alert(item.authors);
  }

