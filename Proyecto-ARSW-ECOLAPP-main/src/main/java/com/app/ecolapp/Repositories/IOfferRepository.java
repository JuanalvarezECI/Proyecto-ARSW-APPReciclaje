package com.app.ecolapp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.ecolapp.Models.OfferModel;

public interface IOfferRepository extends JpaRepository<OfferModel, Long>{

}
