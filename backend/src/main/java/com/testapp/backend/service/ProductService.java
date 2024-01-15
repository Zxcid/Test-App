package com.testapp.backend.service;

import com.testapp.backend.db.model.ProductEntity;
import com.testapp.backend.db.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void deleteProduct(Integer productId) {
        try {
            productRepository.deleteByProductId(productId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
