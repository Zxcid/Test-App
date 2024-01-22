package com.testapp.backend.db.repository;

import com.testapp.backend.db.model.StoresEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StoreRepository extends JpaRepository<StoresEntity, Integer> {

    Optional<StoresEntity> findStoreEntityByStoreId(Integer storeId);

    @Query(nativeQuery = true, value = "SELECT * FROM public.stores")
    List<StoresEntity> getAllStores();
}
