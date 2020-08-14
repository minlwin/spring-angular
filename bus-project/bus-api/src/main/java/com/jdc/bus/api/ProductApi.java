package com.jdc.bus.api;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.bus.model.entity.Product;
import com.jdc.bus.model.repo.ProductRepo;

@RestController
@RequestMapping("products")
public class ProductApi {

	@Autowired
	private ProductRepo repo;
	
	@GetMapping
	public List<Product> index() {
		return repo.findAll();
	}
	
	@PostMapping
	public Product create(@RequestBody Product p) {
		return repo.save(p);
	}
	
	@PutMapping
	public Product update(@RequestBody Product p) {
		return repo.save(p);
	}
	
	@GetMapping("{id}")
	public Product findById(int id) {
		return repo.findById(id).orElseThrow(() -> new EntityNotFoundException());
	}
}
