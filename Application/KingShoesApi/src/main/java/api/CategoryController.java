package api;

import java.util.ArrayList;
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
import entities.dto.CategoryDTO;

@Path(value = "/categories")
public class CategoryController {
	@GET
	@Path("/get-all-dto")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAllDTO() {
		List<CategoryDTO> listCDTO = new ArrayList<>();
		List<Category> listC = new CategoryDAOImpl().getAll();
		List<Product> listP = new ProductDAOImpl().getAll();
		for (Category c : listC) {
			CategoryDTO cDTO = new CategoryDTO(c.getEntityId(), c.getName(), c.getStatus(), c.getImage(),
					new ArrayList<Product>());
			for (Product p : listP) {
				if (p.getCategoryId() == c.getEntityId()) {
					cDTO.getProducts().add(p);
				}
			}
			listCDTO.add(cDTO);
		}
		Gson son = new Gson();
		String data = son.toJson(listCDTO);
		return data;
	}

	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<Category> list = new CategoryDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		Category category = new CategoryDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(category);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		Category category = son.fromJson(dataJson, Category.class);
		int result = new CategoryDAOImpl().insert(category);
		String data = son.toJson(result);
		return data;
	}

	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		Category category = son.fromJson(dataJson, Category.class);
		int result = new CategoryDAOImpl().update(category);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new CategoryDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
