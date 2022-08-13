package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblProductPoint")
public class ProductPoint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	private Integer entityId;
	@Column(name = "product_id")
	private Integer productId;
	@Column(name = "value")
	private Integer value;
	
	public ProductPoint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductPoint(Integer entityId, Integer productId, Integer value) {
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

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}
}
