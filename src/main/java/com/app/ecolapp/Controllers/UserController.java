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
import com.app.ecolapp.Services.UserService;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public ArrayList<UserModel> getUsers(){
        return this.userService.getUsers();
    }
    @PostMapping()
    public RedirectView saveUser (@ModelAttribute UserModel user){
        UserModel savedUser = this.userService.saveUser(user);
        return new RedirectView("/user/" + savedUser.getId());
    }
    @GetMapping("/user/{id}")
    public String getUser(@PathVariable Long id, Model model){
        Optional<UserModel> user = this.userService.getById(id);
        model.addAttribute("user", user);
        return "userProfile";
    }
    @GetMapping(path= "/points/{id}")
    public Integer getUserPoints(Long id){
        return this.userService.getPoints(id);
    }



}
