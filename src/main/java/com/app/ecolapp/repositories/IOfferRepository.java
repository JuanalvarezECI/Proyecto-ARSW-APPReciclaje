package com.app.ecolapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecolapp.models.OfferModel;

public interface IOfferRepository extends JpaRepository<OfferModel, Long>{

}
