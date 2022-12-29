class View {
  constructor() {
    this.submitButtonEl = document.querySelector('#submit-button');
    this.submitButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const birthDay = document.querySelector('#birth-day').value;
    const birthMonth = document.querySelector('#month').value;
    const name = document.querySelector('#name').value;
    const Difference_In_Days = this.calculateDays(birthDay, birthMonth);
    const message = document.createElement('h1')
    this.createMessage(Difference_In_Days, message, name);
    document.querySelector('#form').remove()
    document.querySelector('div.main-container').append(message);
  }

  calculateDays(birthDay, birthMonth) {
    const today = new Date();
    const birthday = new Date(`${birthMonth}/${birthDay}/${new Date().getFullYear()}`);
    const Difference_In_Time = today.getTime() - birthday.getTime();
    return (365 - Math.floor(Difference_In_Time / (1000 * 3600 * 24)));
  }
  
  createMessage(Difference_In_Days, message, name) {
    message.id = 'message';
    if(Difference_In_Days === 365) {
      document.querySelector('h1').remove();
      message.textContent = `Happy birthday ${name}!`
    } else {
      document.querySelector('h1').innerText = `Hello ${name}!`
      message.textContent = `There is ${Difference_In_Days} days until your next birthday.`
    }
  }

}

module.exports = View;