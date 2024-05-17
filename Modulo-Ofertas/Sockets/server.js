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
let nombre = ""
let id = 0
io.on("connection", (socket) => {

    // console.log("New client connected", socket.id);

    socket.on("disconnect", () => {
        // console.log("Client disconnected", socket.id);
    });
    socket.on("setName", nombreenviado => {
        nombre = nombreenviado
        console.log(nombre)
    })


    socket.on("new-offer", (offer) => {
       
        offer[1].data.unshift(id);
        // console.log("New offer received:", offer);
        ofertas[offer[0]] = offer[1];
        console.log("nombre del creador:",offer[0] )
        console.log("oferta: ",offer[1] )
        ofertasSinTomar[offer[0]] = offer[1];
        io.emit("update-offers", Object.values(ofertasSinTomar));
        io.emit("myupdate-offers", ofertasenCurso);
        io.emit("myupdate-offers_usser", ofertas);
        // console.log( "ofertas:::", ofertas)
        id +=1
 
    });

    socket.on("endState", data =>{
        const filteredOffers = Object.entries(ofertasenCurso).filter(([key, value]) => value.data[0] === data[1]);
        let filteredOffersUser = Object.entries(ofertas)
        .filter(([key, value]) => value.data[0] === data[1])
        console.log(filteredOffersUser)
        filteredOffers[0][1].data[3] = "Recogido";
        ofertasenCurso[data[0]] = filteredOffers[0][1];
        console.log(ofertasenCurso, "ofertaaaaas")

        filteredOffersUser[0][1].data[3] = "Finalizado";
        ofertas[data[0]] = filteredOffersUser[0][1];
        io.emit("update-offers", Object.values(ofertasSinTomar));
        io.emit("myupdate-offers", ofertasenCurso);
        io.emit("myupdate-offers_usser", ofertas);

    })

    

    

    socket.on("take-offer", (offerId) => {
        // Filtra para encontrar la oferta basada en offerId en ambos diccionarios
        const filteredOffers = Object.entries(ofertasSinTomar).filter(([key, value]) => value.data[0] === offerId[1]);
        const filteredOffersUser = Object.entries(ofertas).filter(([key, value]) => value.data[0] === offerId[1]);
    
        if (filteredOffers.length > 0 && filteredOffersUser.length > 0) {
            // Asegúrate de que la oferta no esté ya en curso
            if (!(ofertasenCurso[filteredOffers[0][0]])) {
                // Crea copias profundas del objeto oferta para modificar sin afectar los originales
                const ofertaTomada = JSON.parse(JSON.stringify(filteredOffers[0][1]));
                const ofertaTomadaUsuario = JSON.parse(JSON.stringify(filteredOffersUser[0][1]));
    
                ofertaTomada.data[3] = "Asignado";
                ofertaTomadaUsuario.data[3] = "Asignado a recolector";
                console.log("ofertas en curso antes", ofertasenCurso)
                // Guarda la oferta en curso usando la clave correcta del diccionario
                ofertasenCurso[offerId[0]] = ofertaTomada;
                ofertas[filteredOffersUser[0][0]] = ofertaTomadaUsuario;
                console.log("ofertas en curso", ofertasenCurso)
    
                // Remueve la oferta de ofertasSinTomar usando la clave correcta
                delete ofertasSinTomar[filteredOffers[0][0]];
    
                // Emitir actualizaciones
                io.emit("update-offers", Object.values(ofertasSinTomar));
                io.emit("myupdate-offers", ofertasenCurso);
                io.emit("myupdate-offers_usser", ofertas);
            }
        } else {
            console.log("No se encontró la oferta en uno de los diccionarios.");
        }
    });
    
 
    socket.on('updateOffers', data =>{
        io.emit("update-offers", Object.values(ofertasSinTomar));
        io.emit("myupdate-offers", ofertasenCurso);
        io.emit("myupdate-offers_usser", ofertas);

        // console.log('update offers correct: ',"myupdate-offers", ofertasenCurso)
    })

    // socket.on('offer-taken', (offerId) => {
    //     // Logic to handle the offer being taken
    //     console.log(`Offer with ID ${offerId} has been taken.`);
    //     // Perform the necessary actions, such as marking the offer as taken
    //   });


});

server.listen(port, () => console.log(`Listening on port ${port}`));
