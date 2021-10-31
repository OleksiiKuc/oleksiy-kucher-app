import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

const ITEMS: Item[] = [
  {
    id: '0',
    name: 'Item A-1',
    image: 'assets/images/A/A-1.png',
    category: 'A',
    featured: true,
    label: 'L-1',
    price: '4.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: '1',
    name: 'Item A-2',
    image: 'assets/images/A/A-2.png',
    category: 'A',
    featured: true,
    label: 'L-2',
    price: '9.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: '2',
    name: 'Item B-1',
    image: 'assets/images/B/B-1.png',
    category: 'B',
    featured: true,
    label: 'L-3',
    price: '2.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: '3',
    name: 'Item B-2',
    image: 'assets/images/B/B-2.png',
    category: 'B',
    featured: true,
    label: 'L-4',
    price: '1.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: '4',
    name: 'Item C-1',
    image: 'assets/images/C/C-1.png',
    category: 'C',
    featured: true,
    label: 'L-5',
    price: '7.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    id: '5',
    name: 'Item C-2',
    image: 'assets/images/C/C-2.png',
    category: 'C',
    featured: true,
    label: 'L-6',
    price: '0.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
]

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
