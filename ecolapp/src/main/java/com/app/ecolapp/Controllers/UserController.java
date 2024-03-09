package com.app.ecolapp.Controllers;


import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.ecolapp.Models.UserModel;
import com.app.ecolapp.Services.UserService;

@RestController
@RequestMapping("/offer")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public ArrayList<UserModel> getUsers(){
        return this.userService.getUsers();
    }
    @PostMapping()
    public UserModel saveUser (@RequestBody UserModel user){
        return this.userService.saveUser(user);
    }
    @GetMapping(path= "/{id}")
    public Optional<UserModel> getUser(Long id){
        return this.userService.getById(id);
    }
    @GetMapping(path= "/points/{id}")
    public Integer getUserPoints(Long id){
        return this.userService.getPoints(id);
    }



}
