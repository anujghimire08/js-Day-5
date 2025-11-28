// promise is a object to manage asynchronous(async) operations

function task1() {
  return new Promise((r, f) => {
    setTimeout(() => {
      console.log("task 1 completed");
      r();
    }, 1000);
  });
}
function task2() {
  return new Promise((r, f) => {
    setTimeout(() => {
      console.log("task 2 completed");
      r();
    }, 500);
  });
}
function task3() {
  return new Promise((r, f) => {
    setTimeout(() => {
      console.log("task 3 completed");
      r();
    }, 1500);
  });
}
function task4() {
  return new Promise((r, f) => {
    setTimeout(() => {
      console.log("task 4 completed");
      r();
    }, 2000);
  });
}
task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4())
  .then(() => console.log("all tasks completed"));
