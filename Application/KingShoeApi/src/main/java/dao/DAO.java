package dao;

import java.util.List;

public interface DAO<T> {
	List<T> getAll();
	T getById(int entityId);
	Integer insert(T entity);
	Integer update(T entity);
	Integer delete(int entityId);
}