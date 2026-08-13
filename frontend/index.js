var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"john png.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"jane .png"
    }
]
var curId = 0;

function toggleUser(){
    curId = (curId + 1) % 2;

    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");

    userName.innerHTML = users[curId].name;
    userGender.innerHTML = users[curId].gender;
    userImage.src = users[curId].image;
}