package com.app.ecolapp.services;

import java.util.ArrayList;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.app.ecolapp.models.RewardModel;
import com.app.ecolapp.repositories.IRewardRepository;
import com.app.ecolapp.models.response.GenericResponse;

@Service
public class RewardService {
    private final IRewardRepository rewardRepository;

    public RewardService(IRewardRepository rewardRepository) {
        this.rewardRepository = rewardRepository;
    }
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
    public GenericResponse<ArrayList<RewardModel>> getRewardsWithMinQuantity() {
        try {
            var list = (ArrayList<RewardModel>) rewardRepository.findAll();
            var filteredList = list.stream()
                .filter(reward -> reward.getCost() >= 1)
                .collect(Collectors.toCollection(ArrayList::new));
    
            return new GenericResponse<ArrayList<RewardModel>>(HttpStatus.OK, "OK", true, filteredList);
    
        } catch (Exception exception) {
            return new GenericResponse<ArrayList<RewardModel>>(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(),
                    false, null);
        }
    }
}
