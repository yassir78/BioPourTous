import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  ratings = [
    {
      title: "great service",
      name: "jack",
      date: "77 minutes ago",
      star: 5,
      text: "something like something like something like something like...",
      readMore: true,
    },
    {
      title: "ok service",
      name: "jilly",
      date: "78 minutes ago",
      star: 3,
      text: "because because because because because because because..",
      readMore: true,
    },
    {
      title: "greaty service",
      name: "jackie",
      date: "79 minutes ago",
      star: 5,
      text: "something likes...",
      readMore: false,
    },
    {
      title: "bad service",
      name: "jill",
      date: "87 minutes ago",
      star: 1,
      text: "horrible because..",
      readMore: false,
    },
  ];
  public rating = "";
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
  };
  constructor() {}

  ngOnInit() {}
  onModelChange($event) {
    console.log($event);

    this.rating = $event;
  }
}
