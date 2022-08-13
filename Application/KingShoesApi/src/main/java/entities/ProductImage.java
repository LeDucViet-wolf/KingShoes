package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblProductImage")
public class ProductImage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	private Integer entityId;
	@Column(name = "product_id")
	private Integer productId;
	@Column(name = "value")
	private String value;
//	@ManyToOne
//    @JoinColumn(name = "product_id", insertable = false, updatable = false)
//	private Product product;
	
	public ProductImage() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProductImage(Integer entityId, Integer productId, String value) {
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
