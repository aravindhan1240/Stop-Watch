import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StopWatchTimer';

  ms:any = '0' + 0;
  sec:any = '0' + 0;
  min:any = '0' + 0;
  hr:any = '0' + 0;

  startTimer :any;
  running = false

  Start(){
    if(!this.running){
      this.running = true;
      this.startTimer = setInterval(() =>{
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if(this.ms === 100){
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0
        }
        if(this.sec === 60){
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0
        }
        if(this.min === 60){
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0'
        }
      },10);
    }else{
      this.stop();
    }
  }
  stop(){
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(){
    clearInterval(this.startTimer);
    this.running = false;
    this.hr = this.sec = this.min = this.ms = '0' + 0;
  }
}
