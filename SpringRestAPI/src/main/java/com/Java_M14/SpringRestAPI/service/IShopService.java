package com.Java_M14.SpringRestAPI.service;

import java.util.List;

import org.springframework.web.servlet.ModelAndView;

import com.Java_M14.SpringRestAPI.dto.Shop;

public interface IShopService {
	
	public List<Shop> listShops();
	
	public Shop saveShop(Shop shop);
	

}
