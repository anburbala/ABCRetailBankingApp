import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKllmfTAvnKxoxOripJxJHpFdbprouOoYJw&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKllmfTAvnKxoxOripJxJHpFdbprouOoYJw&usqp=CAU',
    title: 'Virtual Banking'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oa57ZuDlzb7vpIe-6w2-4VdbPhuMIxrvtw&usqp=CAU',
      thumbImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oa57ZuDlzb7vpIe-6w2-4VdbPhuMIxrvtw&usqp=CAU',
      title: 'Payment Banking'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsocYu-Lr9bDKRmpJk1saqxgYb7uha1tZXqZ97iUgLAImVmrTJRgru96XOvYx86pzSCa4&usqp=CAU',
      thumbImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsocYu-Lr9bDKRmpJk1saqxgYb7uha1tZXqZ97iUgLAImVmrTJRgru96XOvYx86pzSCa4&usqp=CAU',
      title: 'Mobile Banking'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XQ1gmW8Af6tQQrRdv3hukWDYdYlocfquCw&usqp=CAU',
      thumbImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XQ1gmW8Af6tQQrRdv3hukWDYdYlocfquCw&usqp=CAU',
      title: 'Mobile Banking'
    },
    {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkXGhScS4fnf1Cw2QRWliSN3xC2jaxYJE8g&usqp=CAU',
      thumbImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkXGhScS4fnf1Cw2QRWliSN3xC2jaxYJE8g&usqp=CAU',
      title: 'Online Banking'
    }
    
  ];

}
