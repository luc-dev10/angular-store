import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // items
  products: Product[] | undefined;
  categories: Category[] | undefined = [
    { id: 1, isChecked: true, categoryName: 'Equipment' },
    { id: 2, isChecked: true, categoryName: 'Gear' },
    { id: 3, isChecked: true, categoryName: 'Cleaning' },
  ];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      // check if categories is provided

      console.log(queryParams);
      console.log('asas');

      this.productService
        .getProducts(null)
        .subscribe((products) => (this.products = products));
    });
  }

  // create method to fetch based on category
  changeOnCategory(event: Event): void {
    if (this.categories == undefined) return;

    // fetch category and change is checked
    const inputElement = event.target as HTMLInputElement;
    let category: Category | undefined = this.categories.find(
      (c) => c.categoryName == inputElement.name
    );
    if (category != undefined) category.isChecked = !category.isChecked;

    // update url
    let url: string = this.categories
      .filter((c) => c.isChecked)
      .flatMap((c) => `category=${c.id}`)
      .join('&');

    url = url != '' && url != undefined ? `\products?${url}` : `\products`;
    this.location.replaceState(url);
  }
}
