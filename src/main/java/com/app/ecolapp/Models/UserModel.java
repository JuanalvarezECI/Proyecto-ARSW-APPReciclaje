package com.app.ecolapp.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;


@Entity
@Table(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    ///@OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    ///private ArrayList<OfferModel> offers;
    private String Firstname;
    private String SecondName;
    private String Email;
    private Integer Type;
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
    
}
