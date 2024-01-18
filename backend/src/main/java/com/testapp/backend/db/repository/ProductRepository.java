package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.ProductEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {

    @Transactional
    void deleteByProductId(Integer productId);

    Optional<ProductEntity> getByProductId(Integer id);
}
