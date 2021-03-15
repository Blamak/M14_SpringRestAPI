package com.Java_M14.SpringRestAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Java_M14.SpringRestAPI.dto.Shop;
import com.Java_M14.SpringRestAPI.service.ShopServiceImpl;

@RestController
@RequestMapping("/shops")
public class ShopController {

	@Autowired
	ShopServiceImpl shopServiceImpl;

	@GetMapping("")
	public List<Shop> listShops() {
		return shopServiceImpl.listShops();
	}

	@PostMapping("")
	public Shop saveShop(@RequestBody Shop shop) {
		return shopServiceImpl.saveShop(shop);
	}

}
