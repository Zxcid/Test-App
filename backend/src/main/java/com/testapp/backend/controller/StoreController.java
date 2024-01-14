package com.testapp.backend.controller;

import com.testapp.backend.db.model.StoreEntity;
import com.testapp.backend.db.repository.ProductRepository;
import com.testapp.backend.db.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/store")
public class StoreController {

    private final StoreRepository storeRepository;

    @Autowired
    public StoreController(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    @GetMapping("/{storeId}")
    public ResponseEntity<?> getStore(@PathVariable Integer storeId) {
        try {
            return ResponseEntity.ok().body(storeRepository.findStoreEntityByStoreId(storeId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
