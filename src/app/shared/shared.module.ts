import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [ NavbarComponent, SidebarComponent, HomeComponent, ContainerComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ContainerComponent]
})
export class SharedModule {}
