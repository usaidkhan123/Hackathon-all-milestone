// // // const form = document.getElementById("resume-form") as HTMLFormElement;
// // // const resumeDisplayElement = document.getElementById("resume-display") as HTMLElement;

// // // form.addEventListener('submit',(event:Event) => {
// // //     event.preventDefault(); //prevent page reload
    
// // //     const username = (document.getElementById("username") as HTMLInputElement).value
// // //     const name = (document.getElementById("name") as HTMLInputElement).value
// // //     const email = (document.getElementById("email") as HTMLInputElement).value
// // //     const phone = (document.getElementById("phone") as HTMLInputElement).value
// // //     const address = (document.getElementById("address") as HTMLInputElement).value
// // //     const skills = (document.getElementById("skills") as HTMLInputElement).value
// // //     const experience = (document.getElementById("experience") as HTMLInputElement).value
// // //     const education = (document.getElementById("education") as HTMLInputElement).value
    
// // //     const resumehtml =`
// // //     <h2><b>Resume</b></h2>
// // //     <h3>Personal Information</h3>
// // //     <p><b>Name:</b>${name}</p>
// // //     <p><b>Email:</b>${email}</p>
// // //     <p><b>Phone:</b>${phone}</p>
// // //     <p><b>Address:</b>${address}</p>
// // //     <p><b>Skills:</b>${skills}</p>
// // //     <p><b>Experience:</b>${experience}</p>
// // //     <p><b>Education:</b>${education}</p>
// // //     `;


// // //     if(resumeDisplayElement){
// // //         resumeDisplayElement.innerHTML = resumehtml;
// // //     }else {
// // //         console.log("Resume display element not found")
// // //     }
// // // });


// // Get references to the form and display area
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
// const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
// const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
// const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
// event.preventDefault(); // prevent page reload
// // Collect input values
// const username = (document.getElementById('username') as
// HTMLInputElement).value;
// const name = (document.getElementById('name') as HTMLInputElement).value;
// const email = (document.getElementById('email') as HTMLInputElement).value;
// const phone = (document.getElementById('phone') as HTMLInputElement).value;
// const skills = (document.getElementById('skills') as
// HTMLTextAreaElement).value;
// const experience = (document.getElementById('experience') as
// HTMLTextAreaElement).value;
// const education = (document.getElementById('education') as
// HTMLTextAreaElement).value;


// // Save form data in localStorage with the username as the key
// const resumeData = {
// name,
// email,
// phone,
// skills,
// experience,
// education,
// };
// localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
// // Generate the resume content dynamically

//     const resumeHTML =`
//     <h2><b>Resume</b></h2>
//     <h3>Personal Information</h3>
//     <p><b>Name:</b>${name}</p>
//     <p><b>Email:</b>${email}</p>
//     <p><b>Phone:</b>${phone}</p>
//     <p><b>Skills:</b>${skills}</p>
//     <p><b>Experience:</b>${experience}</p>
//     <p><b>Education:</b>${education}</p>
//     `;
// // Display the generated resume
// resumeDisplayElement.innerHTML = resumeHTML;
// // Generate a shareable URL with the username only
// const shareableURL =
// `${window.location.origin}?username=${encodeURIComponent(username)}`;
// // Display the shareable link
// shareableLinkContainer.style.display = 'block';
// shareableLinkElement.href = shareableURL;
// shareableLinkElement.textContent = shareableURL;
// });
// // Handle PDF download
// downloadPdfButton.addEventListener('click', () => {
// window.print(); // This will open the print dialog and allow the user to save as PDF
// });
// // Prefill the form based on the username in the URL
// window.addEventListener('DOMContentLoaded', () => {
// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');
// if (username) {

// // Autofill form if data is found in localStorage
// const savedResumeData = localStorage.getItem(username);
// if (savedResumeData) {
// const resumeData = JSON.parse(savedResumeData);
// (document.getElementById('username') as HTMLInputElement).value =
// username;
// (document.getElementById('name') as HTMLInputElement).value =
// resumeData.name;
// (document.getElementById('email') as HTMLInputElement).value =
// resumeData.email;
// (document.getElementById('phone') as HTMLInputElement).value =
// resumeData.phone;
// (document.getElementById('skills') as HTMLTextAreaElement).value =
// resumeData.skills;
// (document.getElementById('experience') as HTMLTextAreaElement).value
// = resumeData.experience;
// (document.getElementById('education') as HTMLTextAreaElement).value =
// resumeData.education;
// }
// }
// });



// // Get form elements
// // const form = document.getElementById('resume-form') as HTMLFormElement;
// // const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
// // const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLDivElement;
// // const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
// // const downloadButton = document.getElementById('download-pdfa') as HTMLButtonElement;

// // // Function to generate resume HTML
// // function generateResumeHTML(data: { [key: string]: string }): string {
// //     return `
// //         <h3>Personal Information</h3>
// //         <p><b>Username:</b> ${data.username}</p>
// //         <p><b>Name:</b> ${data.name}</p>
// //         <p><b>Email:</b> ${data.email}</p>
// //         <p><b>Phone:</b> ${data.phone}</p>
// //         <h3>Skills</h3>
// //         <p>${data.skills}</p>
// //         <h3>Experience</h3>
// //         <p>${data.experience}</p>
// //         <h3>Education</h3>
// //         <p>${data.education}</p>
// //     `;
// // }

// // // Function to handle form submission
// // form.addEventListener('submit', (event: Event) => {
// //     event.preventDefault();

// //     // Get form data
// //     const formData = new FormData(form);
// //     const data: { [key: string]: string } = {};
// //     formData.forEach((value, key) => {
// //         data[key] = value.toString();
// //     });

// //     // Generate resume HTML and display it
// //     const resumeHTML = generateResumeHTML(data);
// //     resumeDisplay.innerHTML = resumeHTML;

// //     // Generate a shareable link (for simplicity, using a data URL)
// //     const blob = new Blob([resumeHTML], { type: 'text/html' });
// //     const url = URL.createObjectURL(blob);
// //     shareableLink.href = url;
// //     shareableLink.textContent = url;

// //     // Show the shareable link container
// //     shareableLinkContainer.style.display = 'block';
// // });

// // // Function to handle PDF download
// // downloadButton.addEventListener('click', () => {
// //     const link = document.createElement('a');
// //     link.href = shareableLink.href;
// //     link.download = 'resume.pdf';
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// // });




const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        skills,
        experience,
        education,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Skills:</b> ${skills}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Education:</b> ${education}</p>
    `;

    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;

    // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
        }
    }
});
