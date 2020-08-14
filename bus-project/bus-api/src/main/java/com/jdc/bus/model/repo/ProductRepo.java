package com.jdc.bus.model.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdc.bus.model.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Integer>{

}
