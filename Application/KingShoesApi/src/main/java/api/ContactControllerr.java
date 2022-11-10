package api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import dao.impl.ContactDAOImpl;
import entities.Contact;

@Path(value = "/contacts")
public class ContactControllerr {
	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<Contact> list = new ContactDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		Contact contact = new ContactDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(contact);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		Contact contact = son.fromJson(dataJson, Contact.class);
		int result = new ContactDAOImpl().insert(contact);
		String data = son.toJson(result);
		return data;
	}
	
	@PUT
	@Path("/update/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String updateC(@PathParam("entityId")int entityId, String dataJson) {
		Gson son = new Gson();
		Contact contact = son.fromJson(dataJson, Contact.class);
		int result = new ContactDAOImpl().update(contact);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new ContactDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}