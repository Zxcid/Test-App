package com.testapp.backend.controller;

import com.testapp.backend.db.model.StoresEntity;
import com.testapp.backend.service.StoreService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class StoreController {

    private final StoreService storeService;
    @Autowired
    public StoreController(StoreService storeService) {
        this.storeService = storeService;
    }

    @Operation(summary = "Get a store by its id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the store",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = StoresEntity.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid id supplied",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Store not found",
                    content = @Content)
    })
    @GetMapping("/stores/{storeId}")
    public ResponseEntity<?> getStore(@PathVariable Integer storeId) {
        try {
            return ResponseEntity.ok().body(storeService.getStoreById(storeId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/stores")
    public ResponseEntity<?> getStores() {
        return storeService.getAllStores();
    }


}
