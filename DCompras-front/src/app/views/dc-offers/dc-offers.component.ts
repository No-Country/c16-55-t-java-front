import { Component } from '@angular/core';
import { IDcProduct } from 'src/app/interfaces/Idc-product';

@Component({
  selector: 'app-dc-offers',
  templateUrl: './dc-offers.component.html',
  styleUrls: ['./dc-offers.component.scss'],
})
export class DcOffersComponent {
  products = [
    {
      id: 1,
      brand: 'Coca-Cola',
      name: 'Coca-Cola Original',
      quantity: '355 ml',
      price: 150,
      code: 123456,
      imgBrand:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnjK7RAVHAbMzqNMMm73NO4P1KaHXMz443dQ&usqp=CAU',
      imgProduct:
        'data:image/jpeg;base64,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',
      category: 'Bebidas',
      description: 'Refresco de cola refrescante y delicioso.',
    },
    {
      id: 2,
      brand: 'Frito-Lay',
      name: 'Cheetos Crunchy',
      quantity: '60 g',
      price: 200,
      code: 789012,
      imgBrand: 'URL_imagen_marca_cheetos',
      imgProduct: '',
      category: 'Snacks',
      description: 'Snack crujiente y sabroso con sabor a queso.',
    },
    {
      id: 3,
      brand: 'Frito-Lay',
      name: "Lay's Classic",
      quantity: '184 g',
      price: 1750,
      code: 345678,
      imgBrand: 'URL_imagen_marca_lays',
      imgProduct: 'URL_imagen_producto_lays',
      category: 'Snacks',
      description: 'Patatas fritas clásicas y sabrosas.',
    },
    {
      id: 4,
      brand: "McDonald's",
      name: 'Big Mac',
      quantity: '1 unit',
      price: 5000,
      code: 901234,
      imgBrand: 'URL_imagen_marca_mcdonalds',
      imgProduct: 'URL_imagen_producto_big_mac',
      category: 'Fast Food',
      description:
        'Hamburguesa de dos pisos con carne, queso, lechuga, cebolla y salsa especial.',
    },
  ];
}
