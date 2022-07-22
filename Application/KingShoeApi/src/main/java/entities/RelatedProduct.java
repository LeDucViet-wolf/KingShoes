package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblRelatedProduct")
public class RelatedProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "product_id")
	public Integer productId;
	@Column(name = "related_product_id")
	public Integer relatedProductId;
	
	public RelatedProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RelatedProduct(Integer entityId, Integer productId, Integer relatedProductId) {
		super();
		this.entityId = entityId;
		this.productId = productId;
		this.relatedProductId = relatedProductId;
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

	public Integer getRelatedProductId() {
		return relatedProductId;
	}

	public void setRelatedProductId(Integer relatedProductId) {
		this.relatedProductId = relatedProductId;
	}
}
