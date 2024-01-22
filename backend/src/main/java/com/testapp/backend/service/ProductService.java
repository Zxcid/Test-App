package com.testapp.backend.service;

import com.testapp.backend.db.model.ProductsEntity;
import com.testapp.backend.db.repository.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductsEntity saveProduct(ProductsEntity product) {
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

    public List<ProductsEntity> getAllByStoreId(Integer storeId) {
        try {
            return productRepository.getAllByStoreId(storeId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
