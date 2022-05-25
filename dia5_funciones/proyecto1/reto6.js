let persona = {"nombre":"Virginia",
                "edad": 20, 
                "esVaron":false,
                "aficiones": [ "moda", "pintura", "fotografia"],
                "nie":{
                        "numero":6125430,
                        "fechaExpedicion":"19 de nomvienbre del 2027"
                      }
               }
console.log(persona.nie.fechaExpedicion)
// console.log(persona.nombre)
// console.log(persona.aficiones)
// console.log(persona.nie)
// console.log(persona.nie.fechaExpedicion)
persona.nie.fechaExpedicion  = "17 de nomvienbre del 2030"
console.log(persona.nie.fechaExpedicion)
persona.aficiones.splice(1, 1)
console.log(persona.aficiones)
persona.aficiones.splice(2, 0, 'apicultura')
console.log(persona.aficiones)


