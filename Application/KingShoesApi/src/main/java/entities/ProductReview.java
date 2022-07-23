package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblProductReview")
public class ProductReview {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "product_id")
	public Integer productId;
	@Column(name = "customer_id")
	public String customerId;
	@Column(name = "comment")
	public String comment;
	@Column(name = "point")
	public Integer point;

	public ProductReview() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductReview(Integer entityId, Integer productId, String customerId, String comment, Integer point) {
		super();
		this.entityId = entityId;
		this.productId = productId;
		this.customerId = customerId;
		this.comment = comment;
		this.point = point;
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

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Integer getPoint() {
		return point;
	}

	public void setPoint(Integer point) {
		this.point = point;
	}
}
