package com.app.ecolapp.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.ecolapp.models.RewardModel;
import com.app.ecolapp.models.response.GenericResponse;
import com.app.ecolapp.services.RewardService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/reward")
public class RewardController {
    private final RewardService rewardService;

    public RewardController(RewardService rewardService) {
        this.rewardService = rewardService;
    }

    @GetMapping()
    public GenericResponse<ArrayList<RewardModel>> getUsers() {
        return this.rewardService.getReward();
    }
    @GetMapping("/Rewards")
    public GenericResponse<ArrayList<RewardModel>> getRewardsWithMinQuantity() {
        return this.rewardService.getRewardsWithMinQuantity();
    }
    @PostMapping()
    public GenericResponse<RewardModel> saveReward(@RequestBody RewardModel reward) {
        return this.rewardService.saveReward(reward);
    }

}
