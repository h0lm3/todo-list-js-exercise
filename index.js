// Task constructor function
function Task(title) {
  this.title = title;
  this.complete = false;

  // Method to mark a task as complete
  this.completeTask = function () {
    this.complete = true;
  };

  // Method to log the state of a task
  this.logTaskState = function () {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  };
}

// DRIVER CODE BELOW

// Create new task objects
const cleanCatLitter = new Task("Clean Cat Litter");
const doLaundry = new Task("Do Laundry");

// Log initial state of tasks
cleanCatLitter.logTaskState(); // Clean Cat Litter has not been completed
doLaundry.logTaskState(); // Do Laundry has not been completed

// Complete tasks
cleanCatLitter.completeTask();
doLaundry.completeTask();

// Log updated state of tasks
cleanCatLitter.logTaskState(); // Clean Cat Litter has been completed
doLaundry.logTaskState(); // Do Laundry has been completed
