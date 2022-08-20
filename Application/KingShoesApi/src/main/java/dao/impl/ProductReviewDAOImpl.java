package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import dao.ProductReviewDAO;
import entities.ProductReview;
import utils.HibernateUtil;

public class ProductReviewDAOImpl implements ProductReviewDAO {
	@Override
	public List<ProductReview> getAll() {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<ProductReview> list = session.createQuery("from ProductReview", ProductReview.class).list();
			session.getTransaction().commit();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return null;
	}

	public List<ProductReview> getByProductId(int productId) {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<ProductReview> list = session
					.createQuery("from ProductReview where productId = :productId", ProductReview.class)
					.setParameter("productId", productId).list();
			session.getTransaction().commit();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return null;
	}

	@Override
	public ProductReview getById(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			ProductReview productReview = session.get(ProductReview.class, entityId);
			return productReview;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return null;
	}

	@Override
	public Integer insert(ProductReview entity) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			Integer entityId = (Integer) session.save(entity);
			session.getTransaction().commit();
			return entityId;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return 0;
	}

	@Override
	public Integer update(ProductReview entity) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.update(entity);
			session.getTransaction().commit();
			return entity.getEntityId();
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return 0;
	}

	@Override
	public Integer delete(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.delete(getById(entityId));
			session.getTransaction().commit();
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return 0;
	}
}
