var form = document.getElementById('Resume-Builder');
var displayform = document.getElementById('Resume-Display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var FatherName = document.getElementById('FatherName').value;
    var Age = document.getElementById('Age').value;
    var Phone = document.getElementById('Phone').value;
    var Email = document.getElementById('Email').value;
    var Address = document.getElementById('Address').value;
    var Experience = document.getElementById('Experience').value;
    var Education1 = document.getElementById('Education1').value;
    var Education2 = document.getElementById('Education2').value;
    var Education3 = document.getElementById('Education3').value;
    var Education4 = document.getElementById('Education4').value;
    var Skills1 = document.getElementById('Skills1').value;
    var Skills2 = document.getElementById('Skills2').value;
    var Skills3 = document.getElementById('Skills3').value;
    var Skills4 = document.getElementById('Skills4').value;
    var Skills5 = document.getElementById('Skills5').value;
    var Skills6 = document.getElementById('Skills6').value;
    var Reference = document.getElementById('reference').value;
    var Objective = document.getElementById('objective').value;
    var resumedisplay = "\n<h1><b>Resume</b></h1>\n\n<h2><b>Objective:</b></h2>\n<p>".concat(Objective, "</p>\n\n<h2><b>Education:</b></h2>\n<p>").concat(Education1, "</p>\n<p>").concat(Education2, "</p>\n<p>").concat(Education3, "</p>\n<p>").concat(Education4, "</p>\n\n<h2><b>Experience:</b></h2>\n<p>").concat(Experience, "</p>\n\n<h2><b>Skills:</b></h2>\n<p>").concat(Skills1, "</p>\n<p>").concat(Skills2, "</p>\n<p>").concat(Skills3, "</p>\n<p>").concat(Skills4, "</p>\n<p>").concat(Skills5, "</p>\n<p>").concat(Skills6, "</p>\n\n<h2><b>Personal Information</b></h2>\n<p><b>Name:</b>").concat(name, "</p>\n<p><b>Father Name:</b>").concat(FatherName, "</p>\n<p><b>Age:</b>").concat(Age, "</p>\n<p><b>Phone:</b>").concat(Phone, "</p>\n<p><b>Email:</b>").concat(Email, "</p>\n<p><b>Address:</b>").concat(Address, "</p>\n\n<h2><b>Reference:</b></h2>\n<p>").concat(Reference, "</p>");
    if (displayform) {
        displayform.innerHTML = resumedisplay;
    }
    else {
        console.error('missing feild');
    }
});
