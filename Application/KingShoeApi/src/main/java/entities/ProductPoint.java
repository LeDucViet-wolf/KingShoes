package entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ProductPoint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "product_id")
	public Integer productId;
	@Column(name = "value")
	public String value;
	
	public ProductPoint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductPoint(Integer entityId, Integer productId, String value) {
		super();
		this.entityId = entityId;
		this.productId = productId;
		this.value = value;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
