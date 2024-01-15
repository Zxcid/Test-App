package com.testapp.backend.service;

import com.testapp.backend.config.StoreNotFoundException;
import com.testapp.backend.db.model.StoreEntity;
import com.testapp.backend.db.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;

import static com.testapp.backend.constants.AppConstants.*;

@Service
public class StoreService {

    private final StoreRepository storeRepository;

    @Autowired
    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public StoreEntity getStoreById(Integer storeId) throws StoreNotFoundException {
        return storeRepository.findStoreEntityByStoreId(storeId)
                .orElseThrow(() -> new StoreNotFoundException(generateErrorMessage(storeId)));
    }

    private String generateErrorMessage(Integer storeId) {
        return MessageFormat.format(STORE_NOT_FOUND_ID_EXCEPTION, storeId);
    }
}
