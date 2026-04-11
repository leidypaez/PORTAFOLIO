import { NgModule, provideBrowserGlobalErrorListeners, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { Proyectos } from './components/proyectos/proyectos';
import { Home } from './components/home/home';


const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'proyectos', component: Proyectos },
  { path: 'about', component: About }
];

@NgModule({
  declarations: [
    App,
    Navbar,
    Hero,
    About,
    Footer,
    Proyectos,
    Home
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
