import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//mis componentes
import { ImageDetailComponent } from './components/images/image-detail.component';
import { ComentFormComponent} from './components/coments/coment-form.component';
import { ImageApiService } from './services/image-api.service'


//material
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSlideToggleModule, MatButtonToggleModule, MatCardModule, MatButtonModule, MatToolbarModule,
  MatAutocompleteModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSliderModule,
  MatTabsModule, MatGridListModule, MatSnackBarModule, MatSidenavModule, MatChipsModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatListModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTooltipModule, MatMenuTrigger,
  MatPaginatorIntl, MatBadgeModule, MatBottomSheetModule, MatTreeModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageDetailComponent,
    ComentFormComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule, CdkTreeModule,
    MatChipsModule, MatDialogModule, MatDividerModule, MatTooltipModule,
    MatExpansionModule, MatListModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRippleModule, MatSortModule, MatStepperModule, MatTableModule,
    MatGridListModule, MatSnackBarModule, MatSidenavModule,
    MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatSlideToggleModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatAutocompleteModule,
    MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule,
    MatRadioModule, MatSliderModule, MatTabsModule, MatBadgeModule, MatBottomSheetModule,
    MatTreeModule,
    HttpModule,
    FormsModule

  ],
  entryComponents: [
    ComentFormComponent
  ],
  providers: [ImageApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
