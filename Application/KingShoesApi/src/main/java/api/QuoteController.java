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

import dao.impl.QuoteDAOImpl;
import entities.Quote;

@Path(value = "/quotes")
public class QuoteController {
	@GET
    @Path("/get-all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        List<Quote> list = new QuoteDAOImpl().getAll();
        Gson son = new Gson();
        String data = son.toJson(list);
        return data;
    }
	
	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId")int entityId) {
		Quote quote = new QuoteDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(quote);
		return data;
	}
	
	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		Quote quote = son.fromJson(dataJson, Quote.class);
		int result = new QuoteDAOImpl().insert(quote);
		String data = son.toJson(result);
		return data;
	}
	
	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		Quote quote = son.fromJson(dataJson, Quote.class);
		int result = new QuoteDAOImpl().update(quote);
		String data = son.toJson(result);
		return data;
	}
	
	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId")int entityId) {
		int result = new QuoteDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
