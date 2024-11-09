const form = document.getElementById('Resume-Builder') as HTMLFormElement
const displayform = document.getElementById('Resume-Display') as HTMLDivElement

form.addEventListener('submit' , (event: Event) => {
   
event.preventDefault();


const name = (document.getElementById('name') as HTMLInputElement).value
const FatherName = (document.getElementById('FatherName') as HTMLInputElement).value
const Age = (document.getElementById('Age') as HTMLInputElement).value
const Phone = (document.getElementById('Phone') as HTMLInputElement).value
const Email = (document.getElementById('Email') as HTMLInputElement).value
const Address = (document.getElementById('Address') as HTMLInputElement).value
const Experience = (document.getElementById('Experience') as HTMLInputElement).value
const Education1 = (document.getElementById('Education1') as HTMLInputElement).value
const Education2 = (document.getElementById('Education2') as HTMLInputElement).value
const Education3 = (document.getElementById('Education3') as HTMLInputElement).value
const Education4 = (document.getElementById('Education4') as HTMLInputElement).value
const Skills1 = (document.getElementById('Skills1') as HTMLInputElement).value
const Skills2 = (document.getElementById('Skills2') as HTMLInputElement).value
const Skills3 = (document.getElementById('Skills3') as HTMLInputElement).value
const Skills4 = (document.getElementById('Skills4') as HTMLInputElement).value
const Skills5 = (document.getElementById('Skills5') as HTMLInputElement).value
const Skills6 = (document.getElementById('Skills6') as HTMLInputElement).value

const Reference = (document.getElementById('reference') as HTMLInputElement).value
const Objective = (document.getElementById('objective') as HTMLInputElement).value

const resumedisplay = `
<h1><b>Resume</b></h1>

<h2><b>Objective:</b></h2>
<p>${Objective}</p>

<h2><b>Education:</b></h2>
<p>${Education1}</p>
<p>${Education2}</p>
<p>${Education3}</p>
<p>${Education4}</p>

<h2><b>Experience:</b></h2>
<p>${Experience}</p>

<h2><b>Skills:</b></h2>
<p>${Skills1}</p>
<p>${Skills2}</p>
<p>${Skills3}</p>
<p>${Skills4}</p>
<p>${Skills5}</p>
<p>${Skills6}</p>

<h2><b>Personal Information</b></h2>
<p><b>Name:</b>${name}</p>
<p><b>Father Name:</b>${FatherName}</p>
<p><b>Age:</b>${Age}</p>
<p><b>Phone:</b>${Phone}</p>
<p><b>Email:</b>${Email}</p>
<p><b>Address:</b>${Address}</p>

<h2><b>Reference:</b></h2>
<p>${Reference}</p>` 



if(displayform) {
    displayform.innerHTML = resumedisplay;
} else {
    console.error('missing feild');
}

})