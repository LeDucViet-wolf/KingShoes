package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblProduct")
public class Product{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "entity_id")
	private Integer entityId;
	@Column(name = "name")
	private String name;
	@Column(name = "price")
	private Float price;
	@Column(name = "sku")
	private String sku;
	@Column(name = "description")
	private String description;
	@Column(name = "status")
	private Integer status;
	@Column(name = "category_id")
	private Integer categoryId;
//	@ManyToOne
//    @JoinColumn(name = "category_id", insertable = false, updatable = false)
//	private Category category;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(Integer entityId, String name, Float price, String sku,
			String description, Integer status, Integer categoryId) {
		super();
		this.entityId = entityId;
		this.name = name;
		this.price = price;
		this.sku = sku;
		this.description = description;
		this.status = status;
		this.categoryId = categoryId;
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

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}
}
