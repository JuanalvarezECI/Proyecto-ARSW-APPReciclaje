package com.app.ecolapp.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.ecolapp.Models.UserModel;
import com.app.ecolapp.Repositories.IUserRepository;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public ArrayList<UserModel> getUsers (){
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    public UserModel saveUser(UserModel user){
        return userRepository.save(user);
    }

    public Optional<UserModel> getById(Long id){
        return userRepository.findById(id);       
    }

    public Integer getPoints(Long id){
        UserModel user = userRepository.findById(id).get();
        Integer points = user.getPoints();
        return points;
    }


}
