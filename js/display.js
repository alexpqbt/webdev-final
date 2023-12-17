const postsSection = document.querySelector("#posts")
const feedbackArray = JSON.parse(sessionStorage.getItem("feedbackArray")) || [];

for (let i = 0; i < feedbackArray.length; i++) {
  const feedback = feedbackArray[i];

  const feedbackContainer = document.createElement("article");
  feedbackContainer.className = "user-post"
  
  const textContainer = document.createElement("div")
  textContainer.className = "user-details"

  const idNumberElement = document.createElement("h1");
  idNumberElement.className = "user-id"
  idNumberElement.textContent = feedback.idNumber;
  textContainer.appendChild(idNumberElement);

  const emailElement = document.createElement("span");
  emailElement.className = "user-email"
  emailElement.textContent = feedback.email;
  textContainer.appendChild(emailElement);

  feedbackContainer.appendChild(textContainer)

  const feedbackElement = document.createElement("p");
  feedbackElement.className = "user-feedback"
  feedbackElement.textContent = feedback.feedback;
  feedbackContainer.appendChild(feedbackElement);

  postsSection.appendChild(feedbackContainer);
}
