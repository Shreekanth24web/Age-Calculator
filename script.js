let calsBtn = document.getElementById("calsBtn")
let userDate = document.getElementById("date")
let result = document.getElementById("result")



calsBtn.addEventListener("click", () => {
      let userInput = new Date(userDate.value)
      let currentDate = new Date()


      let year = userInput.getFullYear();
      let month = userInput.getMonth() + 1;
      let day = userInput.getDate();
      // console.log(year, month, day)


      let CurrentYear = currentDate.getFullYear();
      let CurrentMonth = currentDate.getMonth() + 1;
      let CurrentDay = currentDate.getDate();
      // console.log(CurrentYear, CurrentMonth, CurrentDay)


      let CalsYear = CurrentYear - year
      let ClasMonth = CurrentMonth - month
      let ClasDay = CurrentDay - day

      // console.log(CalsYear, ClasMonth, ClasDay)
      result.innerHTML = `You are  <Span>${CalsYear}</Span> years, <Span>${ClasMonth}</Span> months, <Span>${ClasDay}</Span> days old.`
     
      result.style.display="inline-block"


})