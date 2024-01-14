package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<StoreEntity, Integer> {

    StoreEntity findStoreEntityByStoreId(Integer storeId);
}
