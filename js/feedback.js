function submitFeedback() {
  const id = document.querySelector("#id-input").value
  const mail = document.querySelector("#mail-input").value
  const feedback = document.querySelector("#feedback-box").value

  const feedbackArray = JSON.parse(sessionStorage.getItem('feedbackArray')) || []

  feedbackArray.push({ idNumber: id, email: mail, feedback: feedback })

  sessionStorage.setItem('feedbackArray', JSON.stringify(feedbackArray));

  try {
    window.location.href = 'display.html';
  } catch (error) {
    console.error('Error navigating to display.html:', error);
  }
}

const submit = document.querySelector("#send-btn")
submit.addEventListener("click", submitFeedback)