package com.Java_M14.SpringRestAPI.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Java_M14.SpringRestAPI.dao.IPictureDAO;
import com.Java_M14.SpringRestAPI.dao.IShopDAO;
import com.Java_M14.SpringRestAPI.dto.Picture;
import com.Java_M14.SpringRestAPI.dto.Shop;

@Service
public class PictureServiceImpl implements IPictureService {

	@Autowired
	IPictureDAO iPictureDAO;

	@Autowired
	IShopDAO iShopDAO;

	@Override
	public List<Picture> listPictures(Long shopId) {
		Optional<Shop> shop = iShopDAO.findById(shopId);
		return iPictureDAO.findByShop(shop);
	}

	@Override
	public Picture addPicture(Long shopId, Map<String, String> pictureInfo) {
		Picture newPicture = new Picture();
		newPicture.setTitle(pictureInfo.get("title"));
		newPicture.setAuthor(pictureInfo.get("author"));
		newPicture.setShop(iShopDAO.findById(shopId).orElse(null));
		return iPictureDAO.save(newPicture);
	}

	/*
	 * returns ResponseEntity to handle two different http status (success or empty shop)
	 */
	@Override
	public ResponseEntity<String> deleteAllPictures(Long shopId) {
		Optional<Shop> shop = iShopDAO.findById(shopId);
		List<Picture> pictures = iPictureDAO.findByShop(shop);
		
		if (pictures.isEmpty()) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		} else {
			for (Picture picture : pictures) {
				iPictureDAO.delete(picture);
			}
			return new ResponseEntity<String>(HttpStatus.OK);
		}

	}

}
