import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters: boolean = false
  includeNumbers: boolean = false
  includeSymbols: boolean = false
  password: string = ''
  length: number = 0


  onButtonClick(){
    const numbers: string = '1234567890'
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz'
    const symbols: string = '!@#$%^&*()-_=+:;[{]}'

    let validChars = ''
    if (this.includeLetters) {
      validChars += letters
    }

    if (this.includeNumbers){
      validChars += numbers
    }

    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = ''
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
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


  onChangeLength=( event: Event)=> {

    const parsedValue = parseInt((<HTMLInputElement> event.target).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  protected readonly HTMLElement = HTMLElement
  protected readonly HTMLInputElement = HTMLInputElement
}
