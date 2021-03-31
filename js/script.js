var studentName;
var studentRollNo;
var studentMarks;

function display() {
  $(".display-column").
  // console.log(
  //   "<h3 Roll no - ",
  //   studentRollNo,
  //   ",",
  //   studentName,
  //   " has scored ",
  //   studentMarks,
  //   " marks </h3"
  // );
}

function collectData() {
  studentRollNo = $("#entry-input__rollno input").val();
  studentName = $("#entry-input__name input").val();
  studentMarks = $("#entry-input__marks input").val();

  if (studentRollNo == "" || studentMarks == "" || studentName == "") {
    alert("Please fill all the fields");
  } else {
    display();
  }
}

$("button").click(collectData);
