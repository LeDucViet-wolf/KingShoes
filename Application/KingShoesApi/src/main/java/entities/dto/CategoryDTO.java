package entities.dto;

import java.util.List;
import entities.Product;

public class CategoryDTO {
	private Integer entityId;
	private String name;
	private Integer status;
	private String image;
	private List<Product> products;

	public CategoryDTO(Integer entityId, String name, Integer status, String image,
			List<Product> products) {
		super();
		this.entityId = entityId;
		this.name = name;
		this.status = status;
		this.image = image;
		this.products = products;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
}