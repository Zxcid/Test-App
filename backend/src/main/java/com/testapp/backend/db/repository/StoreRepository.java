package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoreRepository extends JpaRepository<StoreEntity, Integer> {

    Optional<StoreEntity> findStoreEntityByStoreId(Integer storeId);

    @Query(nativeQuery = true, value = "SELECT * FROM public.stores")
    List<StoreEntity> getAllStores();
}
