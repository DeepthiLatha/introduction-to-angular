import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";


const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'search/:searchSong', component:HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}

