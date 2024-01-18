package com.testapp.backend.service;

import com.testapp.backend.db.model.ProductEntity;
import com.testapp.backend.db.repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductEntity saveProduct(ProductEntity product) {
        try {
            return productRepository.save(product);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Transactional
    public void deleteProduct(Integer productId) {
        try {
            productRepository.deleteByProductId(productId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ResponseEntity<?> getByProductId(Integer id) {
        Optional<ProductEntity> product = productRepository.getByProductId(id);
        if (product.isPresent())
            return ResponseEntity.ok().body(product.get());
        else
            return new ResponseEntity<>( "No product found for the given id: " + id, HttpStatus.NOT_FOUND);
    }
}
