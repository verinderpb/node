
const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const message1 = document.querySelector("#message1")
const message2 = document.querySelector("#message2")
message1.textContent = ""
message2.textContent = ""


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    suburb = search.value
    message1.textContent = "Loading..."
    fetch("http://localhost:3000/weather?address=" + suburb).then((response)=>{
        response.json().then((data)=>{
            if (data.error) {
                console.log(data.error)
                message1.textContent = data.error
            } else {
                console.log(data.Address)
                console.log(data.Forecast)
                message1.textContent = data.Address
                message2.textContent = data.Forecast

            }
          
        })
      }) 

})