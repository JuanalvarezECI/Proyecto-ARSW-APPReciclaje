package com.app.ecolapp.Services;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.app.ecolapp.Models.RewardModel;
import com.app.ecolapp.Repositories.IRewardRepository;
import com.app.ecolapp.Models.Response.GenericResponse;

@Service
public class RewardService {

    @Autowired
    IRewardRepository rewardRepository;

    public GenericResponse<ArrayList<RewardModel>> getReward() {

        try {
            var list = (ArrayList<RewardModel>) rewardRepository.findAll();

            return new GenericResponse<ArrayList<RewardModel>>(HttpStatus.OK, "OK", true, list);

        } catch (Exception exception) {
            return new GenericResponse<ArrayList<RewardModel>>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }

    public GenericResponse<RewardModel> saveReward(RewardModel reward) {
        try {
            return new GenericResponse<RewardModel>(HttpStatus.OK, "OK", true, rewardRepository.save(reward));

        } catch (Exception exception) {
            return new GenericResponse<RewardModel>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }

}
