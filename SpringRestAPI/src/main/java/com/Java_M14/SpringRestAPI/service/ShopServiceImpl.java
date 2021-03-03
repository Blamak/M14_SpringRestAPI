package com.Java_M14.SpringRestAPI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import com.Java_M14.SpringRestAPI.dao.IShopDAO;
import com.Java_M14.SpringRestAPI.dto.Shop;

@Service
public class ShopServiceImpl implements IShopService {
	
	@Autowired
	IShopDAO iShopDAO;

	@Override
	public List<Shop> listShops() {
		return iShopDAO.findAll();
	}

	@Override
	public Shop saveShop(Shop shop) {
	return iShopDAO.save(shop);
	}

}
