import { Component, NgModule, HostListener, ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainingCenter';
  classApplied = false;
  CollapsMenutext=false;
  isMobile=false;
  menuHeight=0;
  screenHeight: number=0;
  screenWidth: number=0;
  menu_enabled =true;
  dynamicMinHeight:any

  constructor() { }
  toggleMenu(){
    this.classApplied = !this.classApplied;
    if(!this.isMobile)
     this.CollapsMenutext=!this.CollapsMenutext;
 }


  ngOnInit() {
  }

  resizeIframe() {
    console.log('i am resizeIframe')
    alert(
      'i am 1233'
    )
  }

  //set windows height
//   $scope.setHeight = function() {
//     var windowHeight = $(window).innerHeight();
//     windowHeight= windowHeight-150;
//     console.log(windowHeight);
//     $rootScope.windowHeight = windowHeight;
//  };



}


@NgModule({
  imports: [BrowserModule],
})
export class AppModule {}
