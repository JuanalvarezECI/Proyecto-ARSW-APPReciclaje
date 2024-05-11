package com.app.ecolapp.models;
import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "reward")
public class RewardModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    @Column(nullable = false)
    private Date CreationDate;
    @Column(nullable = false)
    private int unit;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private int Cost;
    @Column(nullable = false)
    private String Description;
    @Column(nullable = false)
    private Date DueDate;
    @Column(nullable = false)
    private String pin;

    public int getUnit() {
        return unit;
    }
    public void setUnit(int unit) {
        this.unit = unit;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Date getCreationDate() {
        return CreationDate;
    }
    public void setCreationDate(Date creationDate) {
        CreationDate = creationDate;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public int getCost() {
        return Cost;
    }
    public void setCost(int cost) {
        Cost = cost;
    }
    public String getDescription() {
        return Description;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public Date getDueDate() {
        return DueDate;
    }
    public void setDueDate(Date dueDate) {
        DueDate = dueDate;
    }
    
    public RewardModel() {
    }
    public RewardModel(Long id, Date creationDate, String address, int cost,
            String description, Date dueDate) {
        this.id = id;
        CreationDate = creationDate;
        this.address = address;
        Cost = cost;
        Description = description;
        DueDate = dueDate;
    }
    public String getPin() {
        return pin;
    }
    public void setPin(String pin) {
        this.pin = pin;
    }

}