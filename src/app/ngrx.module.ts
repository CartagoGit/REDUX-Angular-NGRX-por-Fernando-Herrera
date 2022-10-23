import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { ProyectosModule } from './projects/proyectos.module';
import { SharedModule } from './shared/shared.module';
import { ContainerComponent } from './shared/components/container/container.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, NgrxRoutingModule, SharedModule, ProyectosModule],
  providers: [],
  bootstrap: [ContainerComponent],
})
export class NgrxModule {}
