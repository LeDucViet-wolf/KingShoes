package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblCategory")
public class Category {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "entity_id")
	private Integer entityId;
	@Column(name = "name")
	private String name;
	@Column(name = "status")
	private Integer status;
	@Column(name = "image")
	private String image;
	
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(Integer entityId, String name, Integer status, String image) {
		super();
		this.entityId = entityId;
		this.name = name;
		this.status = status;
		this.image = image;
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
}
