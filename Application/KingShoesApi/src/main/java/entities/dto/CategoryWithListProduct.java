package entities.dto;

import java.util.List;


import entities.Product;

public class CategoryWithListProduct {
	private Integer entityId;
	private String name;
	private Integer status;
	private String image;
	private List<Product> products;
	
	public CategoryWithListProduct(Integer entityId, String name, Integer status, String image,
			List<Product> products) {
		super();
		this.entityId = entityId;
		this.name = name;
		this.status = status;
		this.image = image;
		this.products = products;
	}
	
	
}
