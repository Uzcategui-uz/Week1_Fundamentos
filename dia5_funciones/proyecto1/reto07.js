let person = {
                "nombre": "Virginia",
                "apellidos": ["pacheco", "uzcategui"],
                "edad": 20,
                "padres" :[ {  "nombre": "Karen",
                                "apellidos": ["uzcategui", "gonzales"],
                                "edad": 40,
                                "padres" : [{   "nombre": "maria",
                                                "apellidos": ["Gonzales", "Paredes"],
                                                "edad": 40
                                            },
                                            {   "nombre": "Alvaro",
                                                "apellidos": ["Uzcategui", "Ramirez"],
                                                "edad": 67
                                            }
                                ]
                            },
                            {   "nombre": "Enrique",
                                "apellidos": ["pacheco", "Ramires"],
                                "edad": 42,
                                "padres": [{    "nombre": "Jesus",
                                                "apellidos": ["Ramires", "Perez"],
                                                "edad": 66
                                            },
                                            {   "nombre": "Lupreta",
                                                "apellidos": ["Ramirez", "Martinez"],
                                                "edad": 65
                                            }
                                ]
                            }
                ]
}

    console.log(person.padres[0].padres[1].nombre);
    console.log(person.padres[1].padres[1].apellidos[1]);
    console.log(person.padres[0].edad+person.padres[0].padres[0].edad);

    let auxiliar = person.padres[1].padres[0].edad
    person.padres[1].padres[0].edad =  person.padres[1].padres[1].edad
    person.padres[1].padres[1].edad = auxiliar
    console.log()

    console.log(person.padres[1].padres[0]);
    console.log (person.padres[1].padres[1])
    person.padres[0].padres[0].apellidos.push("perez")
    console.log(person.padres[0].padres[0].apellidos)
    person.padres[0].apellidos.shift()
    console.log(person.padres[0].apellidos)
    person.padres[1].padres[0].apellidos[1][person.padres[1].padres[0].apellidos[1].length -1]
    console.log( person.padres[1].padres[0].apellidos[1][person.padres[1].padres[0].apellidos[1].length -1])
// array = "virginia"
// array [7]
// array[array.length -1]


