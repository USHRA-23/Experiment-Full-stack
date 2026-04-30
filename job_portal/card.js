
const addBtn = document.querySelector("#addBtn");
const jobList = document.querySelector("#jobList");
addBtn.addEventListener("click", function () {
    console.log("Add Job button clicked");
    const title = document.querySelector("#title").value;
    const company = document.querySelector("#company").value;
    const location = document.querySelector("#location").value;
    const salary = document.querySelector("#salary").value;
    const description = document.querySelector("#description").value;
    if (title === "" || company === "") {
        alert("Title and Company are required!");
        return;
    }
    const jobCard = document.createElement("div");
    jobCard.innerHTML =`
        <h3> ${title}</h3>
        <p>Company:  ${company}  </p>
        <p>Location:  ${location} </p>
        <p>Salary:  ${salary}  </p> 
        <p>${description} </p> 
        <button class='deleteBtn'>Delete</button>";`
    jobCard.style.border = "1px solid black";
    jobCard.style.padding = "10px";
    jobCard.style.margin = "10px";
    jobCard.style.color = "blue";
    jobList.appendChild(jobCard);

    console.log("Job added successfully");
    const deleteBtn = jobCard.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
        jobCard.innerText = "This job has been deleted";
        jobCard.style.color = "red";
        console.log("Job deleted");
    });

});
