package com.app.ecolapp.Controllers;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.ecolapp.Models.OfferModel;
import com.app.ecolapp.Models.Response.GenericResponse;
import com.app.ecolapp.Services.OfferService;


@RestController
@RequestMapping("/offers")
public class OfferController {

   
    @Autowired
    private OfferService offerService;

    @GetMapping()
    public GenericResponse<ArrayList<OfferModel>> getOffers(){
        return this.offerService.getOffers();

        
    }

    @PostMapping()
    public  GenericResponse<OfferModel> saveOffer (@RequestBody OfferModel offer){
        return this.offerService.saveOffer(offer);
    }

    @GetMapping(path="/{id}")
    public  GenericResponse<Optional<OfferModel>> getOfferById(Long id){
        return this.offerService.getOfferById(id);
    }

}
