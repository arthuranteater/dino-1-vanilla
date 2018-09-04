document.addEventListener("DOMContentLoaded", function(event) {

  var joblistings = document.querySelector('#job-listings')
  var submit = document.querySelector('.submit')
  var ititle = document.querySelector('.ititle')
  var ipay = document.querySelector('.ipay')
  var idescription = document.querySelector('.idescription')

  fetch('https://dino-1-server.herokuapp.com/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var data = myJson;
    console.log(data)
    for (let i=0; i < data.length; i++) {
      var jobbox = document.createElement('LI')
      var jobtitle = document.createElement('H4')
      var description = document.createElement('P')
      var pay = document.createElement('SMALL')
      var interested = document.createElement('SMALL')
      jobtitle.innerHTML = data[i].title
      description.innerHTML = data[i].description
      pay.innerHTML = data[i].pay
      interested.innerHTML = data[i].interested
      jobbox.appendChild(jobtitle)
      jobbox.appendChild(pay)
      jobbox.appendChild(description)
      jobbox.appendChild(interested)
      joblistings.appendChild(jobbox)
    }


  })
  submit.addEventListener('click', function(event) {
    event.preventDefault()
    var jobbox2 = document.createElement('LI')
    var jobtitle2 = document.createElement('H4')
    var description2 = document.createElement('P')
    var pay2 = document.createElement('SMALL')
    jobtitle2.innerHTML = ititle.value
    pay2.innerText = ipay.value
    description2.innerText = idescription.value
    jobbox2.appendChild(jobtitle2)
    jobbox2.appendChild(pay2)
    jobbox2.appendChild(description2)
    joblistings.appendChild(jobbox2)
  })


});
