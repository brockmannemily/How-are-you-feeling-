function getData(search_term) {

  var userInput = document.getElementById("userInput").value
  var giphyApiKey = "82eeeaa04a0740419f4b5417b9331717"
  var giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

  console.log(userInput)



  var head = document.createElement("h2")

  document.body.appendChild(head)

  head.setAttribute("id", "one")

  if (userInput === "sad") {

    //   var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "WHY ARE YOU SAD? Here are some things to cheer you up!"


    var wordArray = ["puppies", "cat", "karlie kloss"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`
  }



  if (userInput === "happy") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "get it"


    var wordArray = ["good for you", "applause", "yes"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }

  if (userInput === "mad") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "hey man, chill"


    var wordArray = ["calm down", "chill"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }


  if (userInput === "bored") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "not for long"


    var wordArray = ["entertaining", "exciting"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }



  if (userInput === "silly") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "hahahahaha"


    var wordArray = ["crazy", "meme", "fail"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }




  if (userInput === "suprised") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "BOO"


    var wordArray = ["scary"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }


  if (userInput === "satisfied") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "...Soooo satisfying"


    var wordArray = ["unsatisfying"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }


  if (userInput === "nervous") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "Just sit back and relax"


    var wordArray = ["satisfying"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }


  if (userInput === "tired") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "GET UP"


    var wordArray = ["wakeup", "workout"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }


  if (userInput === "embarrassed") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "It's ok, everyone is weird..."


    var wordArray = ["fails"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }



  if (userInput != "embarrassed" && userInput != "tired" && userInput != "mad" && userInput != "sad" && userInput != "happy" && userInput != "bored" && userInput != "silly" && userInput != "scared" && userInput != "suprised" && userInput != "excited" && userInput != "nervous" && userInput != "satisfied") {


    //             var head = document.createElement("h2")

    //   document.body.appendChild(head)

    //   head.setAttribute("id", "one")

    document.getElementById("one").innerHTML = "enter an emotion from the list..."


    var wordArray = ["Error"]

    var rand = Math.floor(Math.random() * wordArray.length);

    var word = wordArray[rand]

    giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`


  }



  fetch(giphySearchEndpoint)
    .then(

      function(data) {
        return data.json()
      })
    .then(
      function(json) {
        console.log(json)


        var j = Math.floor((Math.random() * 24) + 0);


        var image_l = document.createElement("img")
        var imgPath = json.data[j].images.fixed_height.url
        image_l.setAttribute("src", imgPath)
        image_l.setAttribute("id", "child")
        console.log(imgPath)
        document.body.appendChild(image_l)

        //   var desPath = json[i].description
        //     console.log(desPath)
        //   name.appendChild(des)
        //   document.getElementById("desH").innerHTML = document.getElementById("desH").innerHTML + desPath




        // for (i = 0; i < json.length; i++) {
        //     var image_link = document.createElement("img")
        //     var imgPath = json[i].image_link
        //   image_link.setAttribute("src", imgPath)
        //      console.log(imgPath)
        //   document.body.appendChild(image_link)
        // }

        //write your code to take pieces of data from your API and add them to your html page.
      })
    .catch(
      err => {
        console.log(err)
      })
}
