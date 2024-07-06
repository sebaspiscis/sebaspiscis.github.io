import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { CvComponent } from './cv/cv.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'sobre-mi', component: SobremiComponent},
    {path: 'cv', component: CvComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: 'contacto', component: ContactoComponent},
];
