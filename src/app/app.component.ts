import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false
  password: string = ''
  includeNumbers: boolean = false
  includeSymbols: boolean = false

  onButtonClick(){
    console.log(this.includeSymbols)
    this.password = 'sampleP@ssw0rd!'
  }

  onChangeUseLetters() {
  this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
}
