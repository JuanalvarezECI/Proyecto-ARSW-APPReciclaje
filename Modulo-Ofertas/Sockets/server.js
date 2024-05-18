const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4000;
const index = require("./routes/index");

const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
let ofertas = {};
let ofertasSinTomar = {}
let ofertasenCurso = {};
let usuarios = {}
let nombre = ""
let mispremios = {}
const premios = [
    {nombre:"Bono $45.000 KOAJ",
     puntaje: 400
    },
    {nombre: "Bono $40.000 en el Corral",
    puntaje: 190
    },
    {nombre: "5 Viajes gratis en Didi",
    puntaje: 105
    },
    {nombre: "Bono $60.000 en Falabella",
    puntaje: 700
    },
    {nombre: "1 Tarjeta de Regalo de Spotify",
    puntaje: 90
    },
    {nombre: "Bono de 50.000 en el Exito",
    puntaje: 300
    },
    {nombre: "Inscripción gratis en Smart Fit",
    puntaje: 650
    },
    {nombre: "Recarga por un valor de $5.000 en distintos operadores móviles",
    puntaje: 60
    },
    {nombre: "Curso gratis en Platzi",
    puntaje: 800
    },
    {nombre: "Dos boletas en CineColombia",
    puntaje: 100
    },
    {nombre: "1 mes de Netflix",
    puntaje: 110
    },
    {nombre: "Tarjeta de Regalo de Totto $70.000",
    puntaje: 450
    },
    {nombre: "Bono de la librería nacional de Colombia",
    puntaje: 220
    },
    {nombre: "Bono de $40.000 en Homecenter",
    puntaje: 200
    }
]
let id = 0
io.on("connection", (socket) => {



    socket.on("disconnect", () => {
    });
    socket.on("setName", nombreenviado => {
        nombre = nombreenviado
        if (!usuarios[nombre]){
            usuarios[nombre]={puntos:0}
        }
        const premiosobject = Object.entries(premios).filter(([key, value]) => value.puntaje <= usuarios[nombreenviado].puntos);
        io.emit("premios", premiosobject)
        console.log(nombre)
    })


    socket.on("new-offer", (offer) => {

        offer[1].data.unshift(offer[0]);
        offer[1].data.unshift(id);
        offer[1].data.push(0)
        
        ofertas[offer[0]+offer[1].data[0]] = offer[1];
        ofertasSinTomar[offer[0]+offer[1].data[0]] = offer[1];
        io.emit("update-offers", Object.values(ofertasSinTomar));
        io.emit("myupdate-offers", ofertasenCurso);
        io.emit("myupdate-offers_usser", ofertas);
        io.emit("puntos", usuarios)
        console.log( "ofertas:::", ofertas)
        id +=1
        
 
    });

    

    socket.on("canCreate",nombre => {
        const filteredOffersUser = Object.entries(ofertas).filter(([key, value]) => value.data[1] === nombre);
        if(filteredOffersUser.length > 0){
            console.log("canCreateRespons:", filteredOffersUser)
            socket.emit("canCreateResponse", filteredOffersUser )
        }
        else{
            socket.emit("canCreateResponse",[ [ 'a0', { data: ["l", "l", "l", "l", "l", "l"] } ]])
        }
        
        
    })

    socket.on("endState", data =>{
        const filteredOffers = Object.entries(ofertasenCurso).filter(([key, value]) => value.data[0] === data[1]);
        let filteredOffersUser = Object.entries(ofertas)
        .filter(([key, value]) => value.data[0] === data[1])
        let creador = filteredOffersUser[0][1].data[1]
        // console.log("filtradas al finalizar", filteredOffersUser[0][1].data[1])
        // console.log("filtradas al finalizar data", data)
        filteredOffers[0][1].data[4] = "Recogido";
        ofertasenCurso[data[0]+data[1]] = filteredOffers[0][1];
        // console.log(ofertasenCurso, "ofertaaaaas")

        filteredOffersUser[0][1].data[4] = "Finalizado";
        
        let bono = 0
        if(filteredOffersUser[0][1].data[5] == "Plásticos"){
            bono = 6
        }
       else if(filteredOffersUser[0][1].data[5] == "Metales"){
            bono = 9
        }
        else if(filteredOffersUser[0][1].data[5] == "Vidrio"){
            bono = 7
        }
        else if(filteredOffersUser[0][1].data[5] == "Electrónicos"){
            bono = 10
        }
        else if(filteredOffersUser[0][1].data[5] == "Papel/Cartón"){
            bono = 5
        }

        let puntaje = bono * filteredOffersUser[0][1].data[6]



        usuarios[creador].puntos += puntaje
        console.log("usuarios", usuarios)
        const premiosobject = Object.entries(premios).filter(([key, value]) => value.puntaje <= usuarios[creador].puntos);
        console.log("material: ", filteredOffersUser[0][1].data[5])
        ofertas[creador+data[1]] = filteredOffersUser[0][1];
        io.emit("update-offers", Object.values(ofertasSinTomar));
        io.emit("myupdate-offers", ofertasenCurso);
        io.emit("myupdate-offers_usser", ofertas);
        io.emit("puntos", usuarios)
        io.emit("premios", premiosobject)
        console.log(usuarios)

    })

    

    

    socket.on("take-offer", (offerId) => {
        const filteredOffers = Object.entries(ofertasSinTomar).filter(([key, value]) => value.data[0] === offerId[1]);
        const filteredOffersUser = Object.entries(ofertas).filter(([key, value]) => value.data[0] === offerId[1]);
    
        if (filteredOffers.length > 0 && filteredOffersUser.length > 0) {
            if (!(ofertasenCurso[filteredOffers[0][0]])) {
                const ofertaTomada = JSON.parse(JSON.stringify(filteredOffers[0][1]));
                const ofertaTomadaUsuario = JSON.parse(JSON.stringify(filteredOffersUser[0][1]));
    
                ofertaTomada.data[4] = "Asignado";
                ofertaTomadaUsuario.data[4] = "Asignado a recolector";
                ofertasenCurso[offerId[0]+offerId[1]] = ofertaTomada;
                ofertasenCurso[offerId[0]+offerId[1]].data.push(ofertasenCurso[offerId[0]+offerId[1]].data[1])

                ofertasenCurso[offerId[0]+offerId[1]].data[1] = offerId[0]
                ofertas[filteredOffersUser[0][0]] = ofertaTomadaUsuario;
                delete ofertasSinTomar[filteredOffers[0][0]];
    
                io.emit("update-offers", Object.values(ofertasSinTomar));
                io.emit("myupdate-offers", ofertasenCurso);
                io.emit("myupdate-offers_usser", ofertas);
                io.emit("puntos", usuarios)
            }
        } 
        else {
        }
    });

    socket.on('takePrice', data =>{
        const premiosobject = Object.entries(premios).filter(([key, value]) => value.nombre === data[0]);
        usuarios[data[1]].puntos -= premiosobject[0][1].puntaje
        io.emit("puntos", usuarios)
        const premiosupdateobject = Object.entries(premios).filter(([key, value]) => value.puntaje <= usuarios[data[1]].puntos);
        io.emit("premios", premiosupdateobject)
        if (!mispremios[data[1]]){
            mispremios[data[1]]={datos:[]}
        }
        mispremios[data[1]].datos.push(premiosobject)
        io.emit("mispremios", mispremios)

    })

    socket.on("getPoints", name =>{
        const pointsFiltred = Object.entries(usuarios).filter(([key, value]) => key === name);
        console.log("points filtred", pointsFiltred[0][1].puntos)
        console.log("nombre:", name)
        console.log("points filtred usuarios", usuarios)
        socket.emit("sendPoints", pointsFiltred[0][1].puntos)
    })
    
 
    socket.on('updateOffers', data =>{
        io.emit("update-offers", Object.values(ofertasSinTomar));
        io.emit("myupdate-offers", ofertasenCurso);
        io.emit("myupdate-offers_usser", ofertas);
        io.emit("puntos", usuarios)

    })


});

server.listen(port, () => console.log(`Listening on port ${port}`));
