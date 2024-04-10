package com.app.ecolapp.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @OneToMany
    @JoinColumn(name = "offers") 
    private List<OfferModel> offers;

    @Column(nullable = false)
    private String Firstname;
    @Column(nullable = false)
    private String SecondName;
    @Column(nullable = false)
    private String Email;
    @Column(nullable = false)
    private Integer Type;
    @Column(nullable = false)
    private Integer Points;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return Firstname;
    }
    //public OfferModel getOffers() {
    //    return offers;
    //}

    //public void setOffers(OfferModel offers) {
    //    this.offers = offers;
    //}

    public void setFirstname(String firstname) {
        Firstname = firstname;
    }

    public String getSecondName() {
        return SecondName;
    }

    public void setSecondName(String secondName) {
        SecondName = secondName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Integer getType() {
        return Type;
    }

    public void setType(Integer type) {
        this.Type = type;
    }

    public Integer getPoints() {
        return Points;
    }

    public void setPoints(Integer points) {
        this.Points = points;
    }

    public UserModel(Long id, String firstname, String secondName, String email, Integer type, Integer points) {
        this.id = id;
        Firstname = firstname;
        SecondName = secondName;
        Email = email;
        Type = type;
        Points = points;
    }

    public UserModel() {
    }

    public List<OfferModel> getOffers() {
        return offers;
    }

    public void setOffers(List<OfferModel> offers) {
        this.offers = offers;
    }
    
    
}
