function positions(firstPlace, secondPlace, thirdPlace) {
  let podium = [firstPlace, secondPlace, thirdPlace]

  if (podium[0] == "Daniel"){    
    //Quando Daniel é primeiro colocado nada interfere no código, precisando apenas mostrar as colocações.
      return console.log(`1º Colocado - ${podium[0]}, 2º Colocado - ${podium[1]}, 3º Colocado - ${podium[2]}.`)

    } else if (podium[1] == "Daniel"){
      //Neste caso, Daniel é o segundo colocado. Foram utilizados os métodos 'splice' e 'unshift' para fazer a troca de posições.
      podium.splice(1,1)
      podium.unshift("Daniel")

      return console.log(`1º Colocado - ${podium[0]}, 2º Colocado - ${podium[1]}, 3º Colocado - ${podium[2]}.`)

    } else if (podium[2] == "Daniel") {
      //Aqui, Daniel é o terceiro colocado, e, dessa vez, foram utilizados os métodos 'push' e 'splice' para fazer as devidas trocas. 
      podium.push(podium[1])
      podium.splice(1,1)      

      return console.log(`1º Colocado - ${podium[0]}, 2º Colocado - ${podium[1]}, 3º Colocado - ${podium[2]}.`)
    }
  }


positions("Rafael", "Manoel", "Daniel")