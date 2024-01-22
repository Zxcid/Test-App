package com.testapp.backend.db.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "stores", schema = "public", catalog = "postgres")
public class StoresEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "store_id", nullable = false)
    private int storeId;
    @Basic
    @Column(name = "name", nullable = true, length = 255)
    private String name;

    public int getStoreId() {
        return storeId;
    }

    public void setStoreId(int storeId) {
        this.storeId = storeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StoresEntity that = (StoresEntity) o;
        return storeId == that.storeId && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(storeId, name);
    }
}
