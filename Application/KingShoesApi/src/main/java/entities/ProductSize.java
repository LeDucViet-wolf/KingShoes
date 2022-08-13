package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblProductSize")
public class ProductSize {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	private Integer entityId;
	@Column(name = "value")
	private Integer value;
	@Column(name = "quantity")
	private Integer quantity;
	@Column(name = "product_id")
	private Integer productId;

	public ProductSize() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductSize(Integer entityId, Integer value, Integer quantity, Integer productId) {
		super();
		this.entityId = entityId;
		this.value = value;
		this.quantity = quantity;
		this.productId = productId;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

}
