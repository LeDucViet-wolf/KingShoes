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

import dao.impl.ProductPointDAOImpl;
import entities.ProductPoint;
@Path(value = "/productPoints")
public class ProductPointController {
	@GET
    @Path("/get-all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        List<ProductPoint> list = new ProductPointDAOImpl().getAll();
        Gson son = new Gson();
        String data = son.toJson(list);
        return data;
    }
	
	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId")int entityId) {
		ProductPoint productPoint = new ProductPointDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(productPoint);
		return data;
	}
	
	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		ProductPoint productPoint = son.fromJson(dataJson, ProductPoint.class);
		int result = new ProductPointDAOImpl().insert(productPoint);
		String data = son.toJson(result);
		return data;
	}
	
	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		ProductPoint productPoint = son.fromJson(dataJson, ProductPoint.class);
		int result = new ProductPointDAOImpl().update(productPoint);
		String data = son.toJson(result);
		return data;
	}
	
	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId")int entityId) {
		int result = new ProductPointDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
