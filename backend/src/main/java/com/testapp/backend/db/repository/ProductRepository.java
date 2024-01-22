package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.ProductsEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductsEntity, Integer> {

    @Transactional
    void deleteByProductId(Integer productId);

    Optional<ProductsEntity> getByProductId(Integer id);

    List<ProductsEntity> getAllByStoreId(Integer id);
}
