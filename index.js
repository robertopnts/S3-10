function positions(firstPlace, secondPlace, thirdPlace) {
  let podium = [firstPlace, secondPlace, thirdPlace]

  if (podium[0] == "Daniel"){    

      return console.log(`1º Colocado - ${podium[0]}, 2º Colocado - ${podium[1]}, 3º Colocado - ${podium[2]}.`)

    } else if (podium[1] == "Daniel"){
      podium.splice(1,1)
      podium.unshift("Daniel")

      return console.log(`1º Colocado - ${podium[0]}, 2º Colocado - ${podium[1]}, 3º Colocado - ${podium[2]}.`)
    } else if (podium[2] == "Daniel") {
      podium.push(podium[1])
      podium.splice(1,1)      

      return console.log(`1º Colocado - ${podium[0]}, 2º Colocado - ${podium[1]}, 3º Colocado - ${podium[2]}.`)
    }
  }


positions("Rafael", "Manoel", "Daniel")