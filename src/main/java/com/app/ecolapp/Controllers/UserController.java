package com.app.ecolapp.Controllers;


import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.ecolapp.Models.UserModel;
import com.app.ecolapp.Models.Response.GenericResponse;
import com.app.ecolapp.Services.UserService;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public GenericResponse<ArrayList<UserModel>> getUsers(){
        return this.userService.getUsers();
    }
    @PostMapping()
    public GenericResponse<UserModel> saveUser (@RequestBody UserModel user){
        return this.userService.saveUser(user);
    }
    @GetMapping("/user/{id}")
    public GenericResponse<Optional<UserModel>> getUser(@PathVariable Long id){
        return this.userService.getById(id);
    }


    @GetMapping(path= "/points/{id}")
    public GenericResponse<Integer> getUserPoints(@PathVariable Long id){
        return this.userService.getPoints(id);
    }

}
