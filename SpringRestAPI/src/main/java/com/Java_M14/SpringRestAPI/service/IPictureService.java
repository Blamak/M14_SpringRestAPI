package com.Java_M14.SpringRestAPI.service;

import java.util.List;
import java.util.Map;

import com.Java_M14.SpringRestAPI.dto.Picture;
import com.Java_M14.SpringRestAPI.dto.Shop;

public interface IPictureService {
	
	public Picture addPicture(Long shoipId, Map<String, String> pictureInfo);
	
	public List<Picture> listPictures(Long id);
	
	public void deleteAllPictures(Long id);

}
