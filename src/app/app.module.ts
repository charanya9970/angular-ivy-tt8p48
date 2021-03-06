import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DataComponent } from "./data/data.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, HelloComponent, DataComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
