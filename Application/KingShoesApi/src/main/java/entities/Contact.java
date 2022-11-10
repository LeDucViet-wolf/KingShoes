package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblContact")
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "name")
	public String name;
	@Column(name = "email")
	public String email;
	@Column(name = "subject")
	public String subject;
	@Column(name = "message")
	public String message;
	
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Contact(Integer entityId, String name, String email, String subject, String message) {
		super();
		this.entityId = entityId;
		this.name = name;
		this.email = email;
		this.subject = subject;
		this.message = message;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}