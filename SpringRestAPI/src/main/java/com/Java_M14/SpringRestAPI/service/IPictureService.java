package com.Java_M14.SpringRestAPI.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.Java_M14.SpringRestAPI.dto.Picture;

public interface IPictureService {
	
	public Picture addPicture(Long shoipId, Map<String, String> pictureInfo);
	
	public List<Picture> listPictures(Long id);
	
	public ResponseEntity<String> deleteAllPictures(Long id);

}
