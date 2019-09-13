import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../auth/login/login.component'
import { LogoutComponent } from '../auth/logout/logout.component'
import { RegisterComponent } from '../auth/register/register.component'
import { ReaddatabaseComponent } from '../components/readdatabase/readdatabase.component'
import { WritedatabaseComponent } from '../components/writedatabase/writedatabase.component'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'register', component: RegisterComponent},
     
    { path: 'readdatabase', component: ReaddatabaseComponent, outlet: 'outlet2'},
    { path: 'writedatabase', component: WritedatabaseComponent, outlet: 'outlet2'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }