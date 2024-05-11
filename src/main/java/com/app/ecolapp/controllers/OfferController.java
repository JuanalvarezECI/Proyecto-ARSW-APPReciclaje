package com.app.ecolapp.controllers;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.ecolapp.models.OfferModel;
import com.app.ecolapp.models.response.GenericResponse;
import com.app.ecolapp.services.OfferService;


@RestController
@RequestMapping("/offers")
@CrossOrigin(origins = "http://localhost:4200")
public class OfferController {
    private final OfferService offerService;


    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }
    @GetMapping()
    public GenericResponse<ArrayList<OfferModel>> getOffers(){
        return this.offerService.getOffers();
    }

    @PostMapping()
    public  GenericResponse<OfferModel> saveOffer (@RequestBody OfferModel offer){
        return this.offerService.saveOffer(offer);
    }

    @GetMapping(path="/{id}")
    public  GenericResponse<Optional<OfferModel>> getOfferById(@PathVariable Long id){
        return this.offerService.getOfferById(id);
    }

}
