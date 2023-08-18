// firstly, add an event listener to the form submission

function deleteReminders(reminder){
    // targeting the delete button
    // instead of the targeting the ENTIRE document, just targeting the reminder argument
    const deleteButton = reminder.querySelector('.delete-btn');
    // console.log(deleteButton);

    deleteButton.addEventListener("click", (event) => {
      reminder.remove();
    })
}

function toDoList(){

  // targeted the form
  const reminderForm = document.getElementById('reminder-form');
  // console.log(reminderForm);

  // targeted the input box for reminder
  const reminderText = document.querySelector('.reminder-input');
  // console.log(reminderText);

  // targeted the date/time input
  const reminderDate = document.querySelector('.date-time');
  // console.log(reminderDate);

  // targeted list of reminders
  const reminderList = document.getElementById('reminders');
  // console.log(reminderList);

  // created submit event on form
  reminderForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents default refresh after form submission
    // console.log(event);

    // formatting the reminderDate input in the reminder cards
    const dateInput = reminderDate.value;
    var dateTime = new Date(dateInput);
    var formattedDate = dateTime.getDate() + "-" + (dateTime.getMonth() + 1) + "-" + dateTime.getFullYear();
    var formattedTime = dateTime.getHours() + ":" + (dateTime.getMinutes() < 10 ? '0' : '') + dateTime.getMinutes();
    var formattedDateTime = formattedDate + " " + formattedTime;

    // created newReminder card with reminderText and reminderDate values
    const newReminder = `<div class="reminder-card">
    <p class="delete-btn">✘</p>
    <p class="reminder-text">${reminderText.value}</p>
    <p class="reminder-date"><i class="fa-solid fa-bell"></i>${formattedDateTime}</p>
  </div>`;


    reminderList.insertAdjacentHTML("beforeend", newReminder);
    alert('Reminder added!');

    // clearing the input boxes
    reminderText.value = '';
    reminderDate.value = '';

    const newReminderCreated = reminderList.lastElementChild; // retrieving the last child element
    deleteReminders(newReminderCreated); // then calls the delete reminders method
  })

  // Here we are giving the user the ability to delete reminders

  // targeting ALL of the reminder cards
  const reminderCards = document.querySelectorAll('.reminder-card');
  // console.log(reminderCards);
  reminderCards.forEach((reminder, index) => {
    // console.log(reminder);
    deleteReminders(reminder); // calling the delete reminders method
  })
};




toDoList();
