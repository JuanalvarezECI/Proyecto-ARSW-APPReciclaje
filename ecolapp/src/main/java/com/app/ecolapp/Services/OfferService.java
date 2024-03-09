package com.app.ecolapp.Services;


import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecolapp.Models.OfferModel;
import com.app.ecolapp.Repositories.IOfferRepository;

@Service
public class OfferService {

    @Autowired
    IOfferRepository offerRepository;

    public ArrayList<OfferModel> getOffers(){
        return (ArrayList<OfferModel>) offerRepository.findAll();
    }

    @SuppressWarnings("null")
    public OfferModel saveOffer(OfferModel offer){
        return offerRepository.save(offer);
    }

    @SuppressWarnings("null")
    public Optional<OfferModel> getOfferById(Long id){
        return offerRepository.findById(id);
        
    }
}
