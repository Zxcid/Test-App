package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StoreRepository extends JpaRepository<StoreEntity, Integer> {

    Optional<StoreEntity> findStoreEntityByStoreId(Integer storeId);
}
