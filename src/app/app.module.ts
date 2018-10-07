import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//mis componentes
import { StartComponent } from './components/start/start.component';
import { ImageDetailComponent } from './components/images/image-detail.component';
import { ComentFormComponent } from './components/coments/coment-form.component'

//material
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
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
    StartComponent,
    ImageDetailComponent,
    ComentFormComponent
  ],
  imports: [
    BrowserModule,
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
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
