package com.app.ecolapp.Models;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "reward")
public class RewardModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id; 
    @OneToMany
    @JoinColumn(name = "benefited_user") 
    private List<UserModel> Owner;
    @ManyToOne
    @JoinColumn(name = "supplier_id") 
    private UserModel Supplier;
    @Column(nullable = false)
    private Date CreationDate;
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

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public UserModel getSupplier() {
        return Supplier;
    }
    public void setSupplier(UserModel supplier) {
        Supplier = supplier;
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
    public RewardModel(Long id, UserModel owner, UserModel supplier, Date creationDate, String address, int cost,
            String description, Date dueDate) {
        this.id = id;
        //Owner = owner;
       
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
    public List<UserModel> getOwner() {
        return Owner;
    }
    public void setOwner(List<UserModel> owner) {
        Owner = owner;
    }

}