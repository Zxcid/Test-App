package com.testapp.backend.controller;

import com.testapp.backend.constants.AppConstants;
import com.testapp.backend.db.model.ProductEntity;
import com.testapp.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping("/save")
    public ResponseEntity<?> postProduct(@RequestBody ProductEntity product) {
        ProductEntity saved = productService.saveProduct(product);
        if (saved != null)
            return ResponseEntity.ok().body(saved);
        else
            return ResponseEntity.internalServerError().body(AppConstants.PRODUCT_ERROR);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer productId) {
        try {
            productService.deleteProduct(productId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }
}
