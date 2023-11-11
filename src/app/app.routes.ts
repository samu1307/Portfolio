import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: '', component: ProductsComponent},
];
