package com.testapp.backend.service;

import com.testapp.backend.config.StoreNotFoundException;
import com.testapp.backend.db.model.StoresEntity;
import com.testapp.backend.db.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.List;

import static com.testapp.backend.constants.AppConstants.*;

@Service
public class StoreService {

    private final StoreRepository storeRepository;

    @Autowired
    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public StoresEntity getStoreById(Integer storeId) throws StoreNotFoundException {
        return storeRepository.findStoreEntityByStoreId(storeId)
                .orElseThrow(() -> new StoreNotFoundException(generateErrorMessage(storeId)));
    }

    public ResponseEntity<?> getAllStores() {
        List<StoresEntity> stores = storeRepository.getAllStores();
        if (!stores.isEmpty())
            return ResponseEntity.ok().body(stores);
        else
            return ResponseEntity.internalServerError().body("Error. No store found.");
    }

    private String generateErrorMessage(Integer storeId) {
        return MessageFormat.format(STORE_NOT_FOUND_ID_EXCEPTION, storeId);
    }
}
