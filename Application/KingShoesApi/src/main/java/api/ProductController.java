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

import dao.impl.CategoryDAOImpl;
import dao.impl.ProductDAOImpl;
import entities.Category;
import entities.Product;

@Path(value = "/products")
public class ProductController {
	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<Product> list = new ProductDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-list-product-enable")
	@Produces(MediaType.APPLICATION_JSON)
	public String getListProductEnable() {
		List<Product> list = new ProductDAOImpl().getListProductEnable();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		Product product = new ProductDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(product);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		Product product = son.fromJson(dataJson, Product.class);
		int result = new ProductDAOImpl().insert(product);
		String data = son.toJson(result);
		return data;
	}

	@PUT
	@Path("/update/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String updateP(@PathParam("entityId")int entityId, String dataJson) {
		Gson son = new Gson();
		Product product = son.fromJson(dataJson, Product.class);
		Product productOld = new ProductDAOImpl().getById(entityId);
		if(productOld != null) {
			productOld = new Product(entityId,product.getName() , product.getPrice(), product.getSku(), product.getDescription(), product.getStatus(), product.getCategoryId());
		}
		int result = new ProductDAOImpl().update(product);
		String data = son.toJson(result);
		return data;

	}
	
	@PUT
	@Path("/disableProduct/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(@PathParam("entityId")int entityId, String dataJson) {
		Gson son = new Gson();
		Product productOld = new ProductDAOImpl().getById(entityId);
		if(productOld != null) {
			productOld = new Product(entityId,productOld.getName() , productOld.getPrice(), productOld.getSku(), productOld.getDescription(), 0, productOld.getCategoryId());
		
		}
		int result = new ProductDAOImpl().update(productOld);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new ProductDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
