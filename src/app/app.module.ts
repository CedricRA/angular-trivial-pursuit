import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoardComponent } from './board/board.component';
import { BoardSquareComponent } from './board-square/board-square.component';
import { MatDialogModule } from '@angular/material/dialog/dialog-module';

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BoardComponent,
    BoardSquareComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
