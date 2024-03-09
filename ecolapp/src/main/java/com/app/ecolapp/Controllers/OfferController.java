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


@RestController
@RequestMapping("/offer")
public class OfferController {

    @Autowired
    private OfferController offerService;

    @GetMapping()
    public ArrayList<OfferModel> getOffers(){
        return this.offerService.getOffers();
    }

    @PostMapping()
    public OfferModel saveOffer (@RequestBody OfferModel offer){
        return this.offerService.saveOffer(offer);
    }

    @GetMapping(path="/{id}")
    public Optional<OfferModel> getOfferById(Long id){
        return this.offerService.getOfferById(id);
    }

}
