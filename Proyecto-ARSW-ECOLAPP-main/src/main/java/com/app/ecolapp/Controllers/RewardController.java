package com.app.ecolapp.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.ecolapp.Models.RewardModel;
import com.app.ecolapp.Models.Response.GenericResponse;
import com.app.ecolapp.Services.RewardService;

@RestController
@RequestMapping("/reward")
public class RewardController {

    @Autowired
    private RewardService rewardService;

    @GetMapping()
    public GenericResponse<ArrayList<RewardModel>> getUsers() {
        return this.rewardService.getReward();
    }

    @PostMapping()
    public GenericResponse<RewardModel> saveReward(@RequestBody RewardModel reward) {
        return this.rewardService.saveReward(reward);
    }

}
