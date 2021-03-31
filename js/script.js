var studentName;
var studentRollNo;
var studentMarks;

var check = false;

function display() {
  let item =
    '<div class="item">Roll no - <span class="highlight">' +
    studentRollNo +
    '</span> , <span class="highlight">' +
    studentName +
    '</span> have got <span class="highlight">' +
    studentMarks +
    "</span> marks</div>";
  $(".right").append(item);
  console.log(item);
  if (check) {
    $(".item:nth-child()").css("background-color", "lightgrey");
    check = false;
  } else {
    check = true;
  }

  $(".entry-input input").val("");
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
