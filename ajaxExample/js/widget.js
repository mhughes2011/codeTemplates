var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

//This is the new AJAX request for the meeting room status

var roomXHR = new XMLHttpRequest();
roomXHR.onreadystatechange = function() {
  if(roomXHR.readyState === 4 && roomXHR.status === 200) {
    var rooms = JSON.parse(roomXHR.responseText);
    var roomStatusHTML = '<ul class="rooms">';
    for (let i=0; i<rooms.length; i++) {
      if (rooms[i].available === true) {
        roomStatusHTML += '<li class="empty">';
      } else {
        roomStatusHTML += '<li class="full">';
      }
      roomStatusHTML += rooms[i].room;
      roomStatusHTML += '</li>';
    }
    roomStatusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomStatusHTML;
  }
};
roomXHR.open('GET', '../data/rooms.json');
roomXHR.send();