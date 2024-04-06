package com.app.ecolapp.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.Date;


@Entity
@Table(name = "offers")
public class OfferModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
 
    @ManyToOne
    @JoinColumn(name = "owner_id") 
    private UserModel Owner;
    
    @ManyToOne
    @JoinColumn(name = "user_id") 
    private UserModel User;

    @Column(nullable = false)
    private String Address;
    @Column(nullable = false)
    private String Description;
    @Column(nullable = false)
    private Integer Weight;
    @Column(nullable = false)
    private Integer Points;
    @Column(nullable = false)
    private Boolean Status;
    @Column(nullable = false)
    private Date Date;
    @Column(nullable = false)
    private Integer Lat;
    @Column(nullable = false)
    private Integer Lon;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserModel getOwner() {
        return Owner;
    }

    public void setOwner(UserModel owner) {
        Owner = owner;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Integer getWeight() {
        return Weight;
    }

    public void setWeight(Integer weight) {
        Weight = weight;
    }

    public Integer getPoints() {
        return Points;
    }

    public void setPoints(Integer points) {
        Points = points;
    }

    public Boolean getAvailable() {
        return Status;
    }

    public void setAvailable(Boolean available) {
        Status = available;
    }

    public Boolean getStatus() {
        return Status;
    }

    public void setStatus(Boolean status) {
        Status = status;
    }

    public Date getDate() {
        return Date;
    }

    public void setDate(Date date) {
        Date = date;
    }

    public OfferModel(Long id, UserModel owner, UserModel user, String address, String description, Integer weight,
            Integer points, Boolean status, java.util.Date date, Integer lat, Integer lon) {
        this.id = id;
        Owner = owner;
        User = user;
        Address = address;
        Description = description;
        Weight = weight;
        Points = points;
        Status = status;
        Date = date;
        Lat = lat;
        Lon = lon;
    }

    public Integer getLat() {
        return Lat;
    }

    public void setLat(Integer lat) {
        Lat = lat;
    }

    public Integer getLon() {
        return Lon;
    }

    public void setLon(Integer lon) {
        Lon = lon;
    }

    public OfferModel() {
    }

    public UserModel getUser() {
        return User;
    }

    public void setUser(UserModel user) {
        User = user;
    }

    
    

   
    

}
