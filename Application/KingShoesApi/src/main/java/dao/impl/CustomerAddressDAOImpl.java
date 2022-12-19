package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import dao.CustomerAddressDAO;
import entities.CustomerAddress;
import utils.HibernateUtil;

public class CustomerAddressDAOImpl implements CustomerAddressDAO {
	@Override
	public List<CustomerAddress> getAll() {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<CustomerAddress> list = session.createQuery("from CustomerAddress", CustomerAddress.class).list();
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
	
	public List<CustomerAddress> getAllBilling(int customerId) {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<CustomerAddress> list = session.createQuery("from CustomerAddress where type = 'billing' and customerId = " + customerId, CustomerAddress.class).list();
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
	
	public List<CustomerAddress> getAllShipping(int customerId) {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<CustomerAddress> list = session.createQuery("from CustomerAddress where type = 'shipping' and customerId = " + customerId, CustomerAddress.class).list();
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
	public CustomerAddress getById(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			CustomerAddress customerAddress = session.get(CustomerAddress.class, entityId);
			return customerAddress;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return null;
	}

	@Override
	public Integer insert(CustomerAddress entity) {
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
	public Integer update(CustomerAddress entity) {
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
