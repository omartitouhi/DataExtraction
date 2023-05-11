//promised-based HTTP client allow to call eden AI API
const axios = require('axios').default;

//initialise file system to access file on computer
const fs = require("fs");

//create multipart form data parameters form
const FormData = require("form-data");
const form = new FormData();

//add form data parameters to the request
form.append("providers","affinda,hireability")
form.append("file", fs.createReadStream("./Resume-Titouhi-Omar.pdf"));

//configure the request
const options = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/ocr/resume_parser',
    headers:{
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFlMGIxNTctOGE1Mi00MmM2LWFhZjUtNTc2YzEyOWE2OGZkIiwidHlwZSI6ImFwaV90b2tlbiJ9.ZvE-PLQdwyeB-cx2sjX4JM69xaZVvZ4F6IOqjmT1uqs',
        'Content-Type': `multipart/form-data; boundary=${form.getBoundary()}`
    },
    data: form
};

//launch the request and print the result
axios.request(options).then((response) =>{
    console.log(response.data);
    const data = JSON.stringify(response.data);
    console.log(data);
});



