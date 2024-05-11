package com.app.ecolapp.controllers;


import java.util.ArrayList;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.ecolapp.models.UserModel;
import com.app.ecolapp.models.response.GenericResponse;
import com.app.ecolapp.services.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public GenericResponse<ArrayList<UserModel>> getUsers(){
        return this.userService.getUsers();
    }
    @PostMapping()
    public GenericResponse<UserModel> saveUser (@RequestBody UserModel user){
        return this.userService.saveUser(user);
    }
    @GetMapping("/{id}")
    public GenericResponse<Optional<UserModel>> getUser(@PathVariable Long id){
        return this.userService.getById(id);
    }


    @GetMapping(path= "/points/{id}")
    public GenericResponse<Integer> getUserPoints(@PathVariable Long id){
        return this.userService.getPoints(id);
    }


    @PostMapping("/login")
    public GenericResponse<UserModel> login(@RequestBody UserModel loginUser){
        return this.userService.login(loginUser.getEmail(), loginUser.getPassword());
    }

}
